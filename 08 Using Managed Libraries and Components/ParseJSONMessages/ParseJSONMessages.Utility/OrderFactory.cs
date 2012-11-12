using System.Collections.Generic;
using Windows.Data.Json;

namespace ParseJSONMessages.Utility
{
    internal class OrderFactory
    {
        public static IList<Order> CreateList(string ordersJson)
        { 
            IList<Order> orders = new List<Order>();
            
            JsonArray array = new JsonArray();
            if (JsonArray.TryParse(ordersJson, out array))
            {
                if (array.Count > 0)
                {
                    foreach (JsonValue value in array)
                    {
                        orders.Add(OrderFactory.Create(value));
                    }
                }
            }

            return orders;
        }

        public static Order Create(JsonValue orderJson)
        {
            Order order = new Order();
            JsonObject data = orderJson.GetObject();

            int id;
            if (int.TryParse(data.GetNamedNumber("id").ToString(), out id))
            {
                order.Id = id;
            }

            order.Items = OrderItemFactory.CreateList(data.GetNamedValue("items"));

            order.Customer = PersonFactory.Create(data.GetNamedValue("customer"));

            return order;
        }
    }
}
