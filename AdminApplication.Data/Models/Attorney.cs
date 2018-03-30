using System;
using System.Collections.Generic;
using System.Text;

namespace AdminApplication.Data.Models
{
    public class Attorney : DomainModel
    {
		public string Name { get; set; }

		public Guid Kref{ get; set; }
	}
}
