﻿using System.ComponentModel.DataAnnotations;

namespace personNET.models
{
    public class PersonDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string NationName { get; set; }
    }
}
