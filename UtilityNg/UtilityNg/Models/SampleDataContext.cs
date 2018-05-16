using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;


namespace UtilityNg.Models
{
    public class SampleDataContext:DbContext
    {
        public SampleDataContext():base("name=dbcs")
        {
            Database.SetInitializer<SampleDataContext>(null);
        }
        public virtual DbSet<CustomerModel> Customer { get; set; }
    }
}