using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UtilityNg.Models
{   [Table("customer")]
    public class CustomerModel
    {   [Key]
        public int AutoId { get; set; }
        [Required]
        public string Name { get; set; }
        public string Address { get; set; }
        [Required]
        public int Age { get; set; }
        public int Phone { get; set; }
    }
}