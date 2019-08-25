using System.Threading.Tasks;
using Ecommerce.API.Data.Repositories.Interfaces;
using Ecommerce.API.Dtos.ItemDtos;
using Ecommerce.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using System.Collections.Generic;

namespace Ecommerce.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ItemsController : ControllerBase
    {
        private readonly IItemRepository _repo;
        private readonly IMapper _mapper;

        public ItemsController(IItemRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> ListAllItems()
        {
            var items = await _repo.GetItems();

            var itemsToReturn = _mapper.Map<IEnumerable<ItemForListDto>>(items);

            return Ok(itemsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetItem(int id)
        {
            var item = await _repo.GetItem(id);

            var itemsToReturn = _mapper.Map<ItemForDetailedDto>(item);

            return Ok(itemsToReturn);
        }

        [HttpPost]
        public async Task<IActionResult> AddItem(ItemForCreateDto itemForCreateDto)
        {
            itemForCreateDto.Name = itemForCreateDto.Name.ToLower();

            var itemToCreate = new Item
            {
                Name = itemForCreateDto.Name,
                Description = itemForCreateDto.Description
            };

            _repo.AddItem(itemToCreate);

            return (await _repo.SaveAll() == true) ? StatusCode(201) : BadRequest();
        }

        // [HttpPut("{id}")]
        // public async Task<IActionResult> UpdateItem(int id, ItemForUpdateDto itemForUpdateDto) {

        // }
    }
}