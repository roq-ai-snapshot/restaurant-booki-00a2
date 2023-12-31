import { EmployeeInterface } from 'interfaces/employee';
import { MenuInterface } from 'interfaces/menu';
import { ReservationInterface } from 'interfaces/reservation';
import { TableInterface } from 'interfaces/table';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  location?: string;
  opening_hours?: string;
  closing_hours?: string;
  max_capacity?: number;
  name: string;
  created_at?: any;
  updated_at?: any;
  employee?: EmployeeInterface[];
  menu?: MenuInterface[];
  reservation?: ReservationInterface[];
  table?: TableInterface[];
  user?: UserInterface[];

  _count?: {
    employee?: number;
    menu?: number;
    reservation?: number;
    table?: number;
    user?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  opening_hours?: string;
  closing_hours?: string;
  name?: string;
}
