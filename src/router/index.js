import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/Hello';

import Account from 'components/Auth/Account';
import Group from 'components/Auth/Group';

import Share from 'components/Fee/Share';
import DistancePricing from 'components/Fee/DistancePricing';
import Extra from 'components/Fee/Extra';

import Partner from 'components/Business/Partner';
import Agent from 'components/Business/Agent';
import Company from 'components/Business/Company';

import Live from 'components/Monitoring/Live';
import MonitoringRecord from 'components/Monitoring/Record';
import Autocall from 'components/Monitoring/Autocall';
import Sms from 'components/Monitoring/Sms';

import PaymentRecord from 'components/Payment/Record';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/auth/account',
      name: 'Account',
      component: Account,
    },
    {
      path: '/auth/group',
      name: 'Group',
      component: Group,
    },
    {
      path: '/fee/share',
      name: 'Share',
      component: Share,
    },
    {
      path: '/fee/distancepricing',
      name: 'DistancePricing',
      component: DistancePricing,
    },
    {
      path: '/fee/extra',
      name: 'Extra',
      component: Extra,
    },
    {
      path: '/business/partner',
      name: 'Partner',
      component: Partner,
    },
    {
      path: '/business/agent',
      name: 'Agent',
      component: Agent,
    },
    {
      path: '/business/company',
      name: 'Company',
      component: Company,
    },
    {
      path: '/monitoring/live',
      name: 'Live',
      component: Live,
    },
    {
      path: '/monitoring/record',
      name: 'MonitoringRecord',
      component: MonitoringRecord,
    },
    {
      path: '/monitoring/autocall',
      name: 'Autocall',
      component: Autocall,
    },
    {
      path: '/monitoring/sms',
      name: 'Sms',
      component: Sms,
    },
    {
      path: '/payment/record',
      name: 'PaymentRecord',
      component: PaymentRecord,
    },
  ],
});
