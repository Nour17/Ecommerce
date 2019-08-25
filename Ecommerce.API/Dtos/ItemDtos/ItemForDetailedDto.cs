using System;
using System.Collections.Generic;
using Ecommerce.API.Models;

namespace Ecommerce.API.Dtos.ItemDtos
{
    public class ItemForDetailedDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public int CommodityLeft { get; set; }
        public int Rate { get; set; }

        public int NumberOfRatings { get; set; }
        public string PhotoUrl { get; set; }
        public ICollection<Photo> Photos { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}