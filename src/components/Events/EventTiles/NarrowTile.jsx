// NOTE: The idea here was going to be to follow a similar technique used by airbnb in their slot at the react-conf last year,
// but due to unidentified libraries being used, I didn't have time to implement. 

// The basic concept however is to have a base component, which cannot be directly used. This would contain the very basic information about layout and content,
// but would essentially be unstyled. Other components would then extend this base component and implement the styles, passing those to the base.
// This prevent the need for props such as "wide" as I have ultimately used. While this is ok for 1 or 2 props, 
// by the time those props add up and you have lots of logic, you can end up with very messy long code for even simple components. 
// Using this technique means each extended component only implements the additional logic and styles that it needs and does not include code from other designs that we do not need here. 
// Is it a very nice technique which I wish I could have included here, but was not possible for these reasons sadly.

// const styles = {};
const NarrowTile = () => { };

export default NarrowTile;
