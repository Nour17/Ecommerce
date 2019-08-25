using System.ComponentModel.DataAnnotations;

namespace Ecommerce.API.Dtos.ItemDtos
{
    public class ItemForUpdateDto
    {
        [Required]
        public string Description { get; set; }
    }
}