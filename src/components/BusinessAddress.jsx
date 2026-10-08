import { site } from '../data/site';

export default function BusinessAddress({ className, id }) {
  return (
    <address className={className} id={id}>
      {site.businessName}<br />
      {site.address.street}<br />
      {site.address.city}, {site.address.region} {site.address.postalCode}<br />
      {site.address.country}
    </address>
  );
}
