# Component design
Whenever I look at a layout like this, I try to first break down the design into the main components I can clearly see. 
In this case, I could see the search filter box, then 2 similar looking "event lists" with a header, then some sort of list.
From there I could then break those down further and try to analyse the differences. Primarily that one is inside a carousel, the other is not. 
Applying the filter at this stage was less of a concern as this can be easily added later. The design was the tricky part first. 

Since the tiles inside where basically the same, but with different width, I need to ensure DRY principles here and ensure there was a way to externally control the width,
but use the same component for both. Also see my NOTE's and TODO's throughout the app for more info on how I wanted to approach this, or how I would improve a revision.

Honestly, I wish I could have started over. I tried to conceptualise many of the components seen in the design, but I progressed through
I thought of other ways I would have approached them, but due to time constraints could not go back to refactor.\
As a result, there are a bit of a mix of techniques here I am not 100% happy with, though I hope it at least demonstrates my multiple possible thought processes. 

I would have loved to have done more too, such as a more viable component library, and incorporated testing,
but there simply isn't enough time in 4 hours to do everything I would like to demo.\
I would rather discuss with you the sort of things I would test for as well as my general thoughts on testing in visual frameworks such as react. 

# React stuff
I tried to include a bit of everything here, so you'll find at least 1 example of a custom made hook, multiple uses of the built in hooks, example of HOC, as well as other concepts.

# Problems
## Carousel
This test has instantly stumbled across my biggest failing point in web design... The dreaded carousel.
In my +10 years in the job, I have never been good at these. I have never been able to implement a good one that works well in any framework or with any library
and pre-made ones such as the old ones from jquery are normally lacking in something. Either functionality or customisation.
As such, I haven't been able to include a working carousel here. 

I have theories though. I know I can measure the width of boxes, and measure the width of the whole thing, then using javascript boundary measuring, can implement a nice sliding effect. 
But the biggest issue with this is that realistically you should keep that behaviour in a uncontrolled component, which then brings up the issue of binding data well between a controlled and an uncontrolled component.\
Happy to discuss methods to achieve this. 

## Trying to do too much
I will freely admit this is my biggest weakness. I try to do too much, especially with these tech tests. 
Any time I get one I always try to add more than necessary, or try a brand new technique I've never tried before, and I cannot lie, the quality can suffer as a result.\
This is definitely the case here. There are items in this test that I feel I could have done better, but due to trying these ideas I do not really have time to go back and refactor.

As such I would love to discuss, if you feel the need to, what I personally would consider my stronger or weaker points in this tech test.
