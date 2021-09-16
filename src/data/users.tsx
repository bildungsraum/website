 import React from 'react';
 import {difference, sortBy} from '../utils/jsUtils';

 
 export type Tag = {
   label: string;
   description: string;
   icon: JSX.Element;
 };
 
 export type TagType =
   | 'ziel3'
   | 'opensource'
 
 export type User = {
   title: string;
   description: string;
   preview: any;
   website: string;
   source: string;
   tags: TagType[];
 };

 // LIST OF AVAILABLE TAGS
 // Available tags to assign to your site
 // Please choose widely, we'll remove unappropriate tags
 export const Tags: Record<TagType, Tag> = {

   // For open-source sites, a link to the source code is required
   opensource: {
     label: 'Open-Source',
     description: 'Open-Source Docusaurus sites can be useful for inspiration!',
     icon: <>👨‍💻</>,
   },

   ziel3: {
     label: 'Ziel 3',
     description: 'Infrastrukturprototyp',
     icon: <>⚛</>,
   },

   design: {
     label: 'Design',
     description:
       'Beautiful Docusaurus sites, polished and standing out from the initial template!',
     icon: <>💅</>,
   },

   i18n: {
     label: 'I18n',
     description:
       'Translated Docusaurus sites using the internationalization support with more than 1 locale.',
     icon: <>🏳️</>,
   },

   versioning: {
     label: 'Versioning',
     description:
       'Docusaurus sites using the versioning feature of the docs plugin to manage multiple versions.',
     icon: <>👨‍👦‍👦</>,
   },
   // Sites using multi-instance plugins
   multiInstance: {
     label: 'Multi-Instance',
     description:
       'Docusaurus sites using multiple instances of the same plugin on the same site.',
     icon: <>👨‍👩‍👧‍👦</>,
   },

   // Large Docusaurus sites, with a lot of content (> 200 pages, excluding versions)
   large: {
     label: 'Large site',
     description:
       'Very large Docusaurus sites, including much more pages than the average!',
     icon: <>💪</>,
   },

   facebook: {
     label: 'Facebook sites',
     description: 'Docusaurus sites of Facebook projects',
     icon: <>👥</>,
   },

   personal: {
     label: 'Personal sites',
     description:
       'Personal websites, blogs and digital gardens built with Docusaurus',
     icon: <>🙋</>,
   },

   rtl: {
     label: 'RTL Direction',
     description:
       'Docusaurus sites using the right-to-left reading direction support.',
     icon: <>↪️</>,
   },
 };

 // Add your site to this list
 // prettier-ignore
 const Users: User[] = [
   {
     title: 'Netzwerk Digitale Bildung',
     description: 'Nur ein Demoeintrag',
     preview: require('./showcase/netzwerk_logo.jpeg'),
     website: 'https://janrenz.de',
     source: 'https://github.com/janrenz',
     tags: ['opensource'],
   },


   /*
   Pro Tip: add your site in alphabetical order.
   Appending your site here (at the end) is more likely to produce Git conflicts.
    */
 ];

 export const TagList = Object.keys(Tags) as TagType[];
 function sortUsers() {
   let result = Users;
   // Sort by site name
   result = sortBy(result, (user) => user.title.toLowerCase());
   // Sort by favorite tag, favorites first
   result = sortBy(result, (user) => !user.tags.includes('favorite'));
   return result;
 }
 
 export const SortedUsers = sortUsers();
 
 // Fail-fast on common errors
 function ensureUserValid(user: User) {
   function checkFields() {
     const keys = Object.keys(user);
     const validKeys = [
       'title',
       'description',
       'preview',
       'website',
       'source',
       'tags',
     ];
     const unknownKeys = difference(keys, validKeys);
     if (unknownKeys.length > 0) {
       throw new Error(
         `Site contains unknown attribute names=[${unknownKeys.join(',')}]`,
       );
     }
   }
 
   function checkTitle() {
     if (!user.title) {
       throw new Error('Site title is missing');
     }
   }
 
   function checkDescription() {
     if (!user.description) {
       throw new Error('Site description is missing');
     }
   }
 
   function checkWebsite() {
     if (!user.website) {
       throw new Error('Site website is missing');
     }
     const isHttpUrl =
       user.website.startsWith('http://') || user.website.startsWith('https://');
     if (!isHttpUrl) {
       throw new Error(
         `Site website does not look like a valid url: ${user.website}`,
       );
     }
   }
 
   function checkPreview() {
     if (
       !user.preview ||
       (user.preview instanceof String &&
         (user.preview.startsWith('http') || user.preview.startsWith('//')))
     ) {
       throw new Error(
         `Site has bad image preview=[${user.preview}].\nThe image should be hosted on Docusaurus site, and not use remote HTTP or HTTPS URLs`,
       );
     }
   }
 
   function checkTags() {
     if (
       !user.tags ||
       !(user.tags instanceof Array) ||
       (user.tags as string[]).includes('')
     ) {
       throw new Error(`Bad showcase tags=[${JSON.stringify(user.tags)}]`);
     }
     const unknownTags = difference(user.tags, TagList);
     if (unknownTags.length > 0) {
       throw new Error(
         `Unknown tags=[${unknownTags.join(
           ',',
         )}\nThe available tags are ${TagList.join(',')}`,
       );
     }
   }
 
   function checkOpenSource() {
     if (typeof user.source === 'undefined') {
       throw new Error(
         "The source attribute is required.\nIf your Docusaurus site is not open-source, please make it explicit with 'source: null'",
       );
     } else {
       const hasOpenSourceTag = user.tags.includes('opensource');
       if (user.source === null && hasOpenSourceTag) {
         throw new Error(
           "You can't add the opensource tag to a site that does not have a link to source code.",
         );
       } else if (user.source && !hasOpenSourceTag) {
         throw new Error(
           "For open-source sites, please add the 'opensource' tag",
         );
       }
     }
   }
 
   try {
     checkFields();
     checkTitle();
     checkDescription();
     checkWebsite();
     checkPreview();
     checkTags();
     checkOpenSource();
   } catch (e) {
     throw new Error(
       `Showcase site with title=${user.title} contains errors:\n${e.message}`,
     );
   }
 }
 
 Users.forEach(ensureUserValid);