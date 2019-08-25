using System;
using System.Collections.Generic;
using Ecommerce.API.Models;

namespace Ecommerce.API.Dtos.ItemDtos
{
    public class ItemForListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int Rate { get; set; }
        public string PhotoUrl { get; set; }
    }
}