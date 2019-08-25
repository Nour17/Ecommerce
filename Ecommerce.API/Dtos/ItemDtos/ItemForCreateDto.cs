using System.ComponentModel.DataAnnotations;

namespace Ecommerce.API.Dtos.ItemDtos
{
    public class ItemForCreateDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
    }
}