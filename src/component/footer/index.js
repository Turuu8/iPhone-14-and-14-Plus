import { BuyStip } from "./BuyStip";
import { Directory } from "./Directory";
import { FooterEnd } from "./FooterEnd";
import { FootNotes } from "./FootNotes";
import { Breadcrumbs } from "./Breadcrumbs";

export const Footer = () => {
  return (
    <div>
      <BuyStip />
      <FootNotes />
      <Breadcrumbs />
      <Directory />
      <FooterEnd />
    </div>
  );
};
