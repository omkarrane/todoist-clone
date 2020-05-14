import React from 'react';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li data-testid="inbox" className="inbox">
        <span><FaInbox /></span>
        <span className="sidebar__generic__inbox">Inbox</span>
      </li>
      <li data-testid="today" className="today">
        <span><FaRegCalendar /></span>
        <span className="sidebar__generic__today">Today</span>
      </li>
      <li data-testid="next_7" className="next_7">
        <span><FaRegCalendarAlt /></span>
        <span className="sidebar__generic__next_7">Next 7 days</span>
      </li>
    </ul>

    <div className="sidebar__middle">
      <span><FaChevronDown /></span>
      <h2>Projects</h2>
    </div>

    <ul className="sidebar__projects">Projects will be here!</ul>

    Add Project Component!
  </div>
);