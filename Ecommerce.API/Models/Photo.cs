using System;

namespace Ecommerce.API.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool isMain { get; set; }
        public Item Item { get; set; }
        public int ItemId { get; set; }
    }
}