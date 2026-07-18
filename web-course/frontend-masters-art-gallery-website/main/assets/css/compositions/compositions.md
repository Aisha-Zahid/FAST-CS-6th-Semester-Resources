Use the compositions in this section as the C in CUBE CSS.

You can combine them on any element to create unique layouts that are already responsive.

It may be helpful to be explicit in the block code when assigning values for any custom properties associated with a particular composition.

i.e.

.home {
  .with-sidebar > :first-child {
    -min-main-width: 45%;
  }
}