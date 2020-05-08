/** vcloud-director-ui-extension-sample-ticketing-phase3
 *  SPDX-License-Identifier: BSD-2-Clause
 *  Copyright 2018 VMware, Inc. All rights reserved. VMware Confidential
 */
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Ticket} from './ticket';
import {TICKETS} from './mock-tickets';

@Injectable()
export class TicketService {
  ticketID = 200;

  getTickets(): Observable<Ticket[]> {
    return of<Ticket[]>(TICKETS);
  }

  createTicket(description: string): Observable<Ticket> {
    this.ticketID += 1;
    let ticket: Ticket = {
      "ticket_id": this.ticketID.toString(),
      "ticket_msg": description,
      "status": "Open"
    }
    return of<Ticket>(ticket);
  }

  
  deleteTicket(ticket_id: string): Observable<Ticket[]> {
    for (let i=0; i<TICKETS.length; i++) {
      if (TICKETS[i].ticket_id == ticket_id)
      {
        TICKETS.splice(i, 1);
        break;
      }
    }
    return of<Ticket[]>(TICKETS);
  }
}
