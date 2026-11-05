import { register } from '@ninicons/web';
import sparkle from '@ninicons/web/icons/sparkle.js';
import plus from '@ninicons/web/icons/plus.js';
import clock from '@ninicons/web/icons/clock.js';
import home from '@ninicons/web/icons/home.js';
import search from '@ninicons/web/icons/search.js';
import bell from '@ninicons/web/icons/bell.js';
import heart from '@ninicons/web/icons/heart.js';
import gear from '@ninicons/web/icons/gear.js';
import rocket from '@ninicons/web/icons/rocket.js';
import leaf from '@ninicons/web/icons/leaf.js';
import coffee from '@ninicons/web/icons/coffee.js';
import './style.css';

// Registered icons draw straight away; any other <nini-icon name> would be fetched from the CDN on first use.
register(sparkle, plus, clock, home, search, bell, heart, gear, rocket, leaf, coffee);
