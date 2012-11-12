using System.Collections.Generic;

namespace ParseJSONMessages.Utility
{
    internal class OrderItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public double Quantity { get; set; }

        public double Extended
        {
            get
            {
                return Price * Quantity;
            }
        }
    }

    internal class Order
    {
        public int Id { get; set; }
        public IList<OrderItem> Items { get; set; }
        public Person Customer { get; set; }
    }
}
