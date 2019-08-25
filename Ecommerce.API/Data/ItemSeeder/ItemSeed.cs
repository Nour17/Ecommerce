using System.Collections.Generic;
using Ecommerce.API.Models;
using Newtonsoft.Json;

namespace Ecommerce.API.Data.ItemSeeder {
    public class ItemSeed {
        private readonly DataContext _context;
        public ItemSeed (DataContext context) {
            _context = context;
        }

        public void SeedItems() {
            var itemData = System.IO.File.ReadAllText("Data/ItemSeeder/ItemSeedData.json");
            var items = JsonConvert.DeserializeObject<List<Item>>(itemData);
            foreach(var item in items) {
                _context.Items.Add(item);
            }
            _context.SaveChanges();
        }
    }
}