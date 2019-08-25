using System;
using System.Collections.Generic;

namespace Ecommerce.API.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public int CommodityLeft { get; set; }
        public int Rate { get; set; }
        public int NumberOfRatings { get; set; }
        public ICollection<Photo> Photos { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}