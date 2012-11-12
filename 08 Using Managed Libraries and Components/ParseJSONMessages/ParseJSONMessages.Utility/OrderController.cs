using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Windows.Foundation;

namespace ParseJSONMessages.Utility
{
    public sealed class OrderController
    {
        #region AddPerson Async Support
        public IAsyncOperation<string> AddPersonAsync(string personJson)
        {
            return Task.Run<string>(async () =>
            {
                return await StartAddPersonTask(personJson);
            }).AsAsyncOperation();
        }

        private Task<string> StartAddPersonTask(string personJson)
        {
            return Task.Factory.StartNew<string>(() =>
            {
                return this.AddPerson(personJson);
            });
        }
        #endregion

        private string AddPerson(string personJson)
        {
            Person person = PersonFactory.Create(personJson);

            return person.ToString();
        }

        #region AddOrders Async Support
        public IAsyncOperation<string> AddOrdersAsync(string ordersJson)
        {
            return Task.Run<string>(async () =>
            {
                return await StartAddOrderTask(ordersJson);
            }).AsAsyncOperation();
        }

        private Task<string> StartAddOrderTask(string ordersJson)
        {
            return Task.Factory.StartNew<string>(() =>
            {
                return this.AddOrders(ordersJson);
            });
        }
        #endregion 

        private string AddOrders(string ordersJson)
        {
            IList<Order> orders = OrderFactory.CreateList(ordersJson);

            StringBuilder sb = new StringBuilder();

            if (orders.Count > 0)
            {
                sb.AppendLine("<ul>");
                sb.AppendLine(string.Format("<li>There are {0} orders added.</li>", orders.Count));
                sb.AppendLine(string.Format("<li>The second order was placed by {0}.</li>", orders[1].Customer.FullName));
                sb.AppendLine(string.Format("<li>The first item in the first order is '{0} - {1}'.</li>", orders[0].Items[0].Name, orders[0].Items[0].Description));
                sb.AppendLine("</ul>");
            }

            return sb.ToString();
        }
    }
}
