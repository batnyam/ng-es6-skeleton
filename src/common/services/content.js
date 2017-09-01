export default function ContentService() {
  'ngInject';

  return {
    getContent(contentType) {
      if (contentType === 'first') {
        return {
          title: 'First Module',
          body: `
            Phasellus efficitur congue eros ut malesuada. Ut vulputate mattis erat ac lobortis.
            Sed ultrices, eros a auctor tristique, urna augue pretium massa, sit amet ornare odio ante
            sed turpis. In feugiat libero non nisl suscipit volutpat. Praesent interdum purus ligula,
            ac faucibus erat pretium non. Nam arcu turpis, fermentum vel lacinia non, aliquam eu augue.
            Vestibulum purus nunc, feugiat a tortor non, ultricies interdum eros.
            Aliquam vitae sagittis massa. Pellentesque in justo eget quam pulvinar vehicula. Praesent
            placerat diam diam, non rhoncus urna bibendum ac. Donec egestas accumsan magna et vehicula.
            Pellentesque sollicitudin turpis aliquet, dapibus velit eget, facilisis lacus.
          `,
        };
      }
      return 'Content not found.';
    },
  };
}
