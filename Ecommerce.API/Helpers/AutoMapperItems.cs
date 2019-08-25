using System.Linq;
using AutoMapper;
using Ecommerce.API.Dtos.ItemDtos;
using Ecommerce.API.Models;

namespace Ecommerce.API.Helpers
{
    public class AutoMapperItems : Profile
    {
        public AutoMapperItems()
        {
            CreateMap<Item, ItemForListDto>()
                .ForPath(dest => dest.PhotoUrl, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.isMain).Url);
                });
            CreateMap<Item, ItemForDetailedDto>()
                .ForPath(dest => dest.PhotoUrl, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.isMain).Url);
                });
        }
    }
}