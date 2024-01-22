﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutomobileOrganisationStructure.Models
{
    internal class FinanceManager : Employee
    {
        public static string Desc = "responsible for overseeing financial operations, budgeting, and strategic financial planning within an organization";


        public FinanceManager(int employeeId, string firstName, string lastName, decimal salary) : base(employeeId, firstName, lastName, salary, Desc)
        {
        }
    }
}