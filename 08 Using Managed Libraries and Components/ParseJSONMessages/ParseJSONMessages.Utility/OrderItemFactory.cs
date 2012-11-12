using System.Collections.Generic;
using Windows.Data.Json;

using ParseJSONMessages.Utility;

namespace ParseJSONMessages.Utility
{
    internal class OrderItemFactory
    {
        public static IList<OrderItem> CreateList(JsonValue jsonValue)
        {
            IList<OrderItem> items = new List<OrderItem>();

            JsonArray array = jsonValue.GetArray();

            foreach (JsonValue value in array)
            {
                items.Add(OrderItemFactory.Create(value));
            }

            return items;
        }

        private static OrderItem Create(JsonValue value)
        {
            OrderItem item = new OrderItem();
            JsonObject data = value.GetObject();
            int id;
            double price, quantity;

            item.Name = data.GetNamedString("name");
            item.Description = data.GetNamedString("description");

            if (int.TryParse(data.GetNamedNumber("id").ToString(), out id))
            {
                item.Id = id;
            }

            if (double.TryParse(data.GetNamedNumber("price").ToString(), out price))
            {
                item.Price = price;
            }

            if (double.TryParse(data.GetNamedNumber("quantity").ToString(), out quantity))
            {
                item.Quantity = quantity;
            }

            return item;
        }
    }
}
