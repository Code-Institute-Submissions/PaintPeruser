# PaintPeruser
A website where you can visualise paint colours before getting quotes.


## Site Owner Goal
The site is being set up for the owner to sell quantities of paint in specific colours to the user. The owner manufactures several paint varieties and would like the user to be able to visualise their colour choices on an image.

The owner would achieve this by allowing the user to control/amend an image, changing the wall colour to their preference, giving interactivity and driving interest.

Once their selection has been made, the site will allow them to email over a quote to themselves, calculating a quote value with instructions for further purchase. The site will also store their details within the browser cache for user ease of revisiting.

## User Stories

These will be brief touchpoints of what the user is looking for from this site. The full walkthrough is later in the readme of the entire completed journey.

### User A - New Customer
- A new customer has navigated to the website to look at paint.
- They will want to select from multiple colours.
- If the paint can be seen in context, it's more likely that they will commit.
- On choosing a colour, they will want to find out how much it costs.
- A copy of the quote emailed over to them would help cement the sale.
- Next steps for purchasing should be included on the email.

### User B - Returning Customer
- The returning customer will have visited or perhaps purchased paint before.
- They will be familiar with the website from the last time and expect a similar experience.
- They will want to select the same, or a new different colour.
- Their previous choices presented to them will make the experience easier.
- A price will be required for their consideration
- An emailed quote will allow them to continue the process as they likely did before.

## Site Layout

It was decided that a one page layout was the most streamlined way to allow the customer to experience their journey.

The brand is prominent at the top of the homepage, along with navigation should their know where they wish to go. This navigation will follow them down the page for ease.

The subtitle is presented next drawing them down into an explanation how the process works.

Their call to action 'Pick your colour' leads them to a dropdown where they are able to affect the colour choices of the photograph, finding their preferred colour.

They are then able to add their details in order to get a price quote for their colour at their preferred quantity. This is calculated on the fly but the email has details on how they can proceed with their order.

The option is also presented for their details to remain in their browser storage for ease of coming back to, or for future reference/orders. This can be cleared with the second 'reset' button.

Finally there are contact details (which are presented in a closable modal window) and social media links for the customers persual.

## Design Decisions

### General Design
I decided to go for a light coloured theme along with a slightly childish title font, hopefully to reinforce the 'paint' theme.

I settled again for Lato as the font for the body, since it's easy on the eyes and looks professional. On previous mentor advice, the beginning of the website has a rundown of what to expect, to ensure that the user does not feel lost in any way. 

They are then drawn to the main image below - focusing first on the bright colour change buttons. On clicking one (or more) of the buttons, the grey monotone image background changes to their chosen vivid colour that they are deciding between.
The design is meant to be eye catching and originally the image was in it's standard red, but the grey hue was added as the default so there is more of a stark difference when the user first makes their selection.

The buttons were also originally a dropdown menu as it was easier to incorporate the javascript around. A mentor meeting however highlighted the value in the user being able to preview their colour (in the button styling) and whereas the dropdown menu was below the image, the buttons were moved up top so the call to action was more prominent.

A mentor suggestion was also made for the 'choose this colour' below the image. This adds to ease of use for the client so that they don't have to scroll back up to recheck the colour name for their quote, they can instead click a single button which pulls their choice into the box.

The quote box was designed to be compact and straightforward - enter your details, see a price on demand and send it to yourself for your records. Saving this into the local storage was another ease of use choice, so that they are not constantly typing in their name and details if they want more than one quote - known to be frustrating from personal experience.

There originally also was no reset on the details, but was quickly added when it became clear that clearing the local storage is convoluted when you do not have a created option. Even then, there was no confirmation question so the data was just gone on a single click - convenient but error prone. A confirmation popup was added to reduce accidental clicking and user frustration.

As stated elsewhere in the project, EmailJS didn't appear to pass through CSS inline styling on the templates made. The template originally had a background colour, border lines around the quote and text styling to make it not plain-looking. Due to these not coming through in tests, the template was revised to plain-text, though this doesnt relay the rounded user experience that I hoped for.

A modal was chosen for the contact details, since an additional page seemed redundant and the additional writing on the page didnt seem to have a place. The modal allows the details to be prominent and easy to copy should they choose. In the real world also, the social links would lead to the social pages for the actual company, rather than the main sites.

Finally a note on the navbar. A fair amount of change went into this as finding a good middlegroud took some effort. Due to the one-page nature of the site, the nav links remaining at the top seemed not user-friendly. When the nav links scrolled with you, they would blend into the background content with the navbar being transparent, which i didnt want to get rid of as it looks clean and neat.

As such, javascript was used to allow the transparent nav at the top, but a translucent appearance added on scroll. This allows the nav content to be seen, even if it does flow over the page content. An effort has been made for this not to be the general case however in the site content being restricted in width and the brand minimising to it's first letter on scroll, so both sides of the nav flow either side of the page content.


### Wireframes

Desktop

![Desktop-1](https://user-images.githubusercontent.com/61311614/94927775-a4c90e00-04ba-11eb-95f3-20b0d7045179.png)

![Desktop-2](https://user-images.githubusercontent.com/61311614/94927835-ba3e3800-04ba-11eb-982e-9576624ea8ef.png)

![Desktop-3-2](https://user-images.githubusercontent.com/61311614/94928357-7992ee80-04bb-11eb-9f1a-a1603d0a4544.png)



Mobile

![Mobile-1](https://user-images.githubusercontent.com/61311614/94928005-f1144e00-04ba-11eb-967e-0b7acd2f248d.png)

![Mobile-2](https://user-images.githubusercontent.com/61311614/94928022-f5406b80-04ba-11eb-8bff-4f3ff43961ea.png)

![Mobile-3-2](https://user-images.githubusercontent.com/61311614/94928370-7c8ddf00-04bb-11eb-8fe1-07e557c4f07c.png)


### Technologies used

- Repl.it - this was the chosen development platform.
- Bootstrap for site layout, container code, navbar functions - used throughout for rich content and responsive behaviour.
- JQuery addon used for rich function searching in order to appropriately target html and css for site functionality.
- GitHub - utilised for cloud backups and project progression.
- GitHub Pages - an aspect of github, used to deploy the finalised product.
- Figma - used to create wireframe ideas of how the website should look and function. Used as an alternative to Balsamiq to get a feel for other programs
- Replace.bg - utilised to remove the background from the main site image for the colour overlay.

## Deployment Procedure
- Github pages utilised for deployment - process as follows: 
- Navigate to https://github.com/WrightDanG/PaintPeruser/ -Settings, scroll down to Github pages -Select the master branch, root directory and click deploy. -Site is hosted at https://wrightdang.github.io/PaintPeruser/

On the first navigation, a 404 error was presented. Manually navigating to https://wrightdang.github.io/PaintPeruser/index.html resolved this and the website remained stable after that.

In addition, on first hosting the main image was non-functional and the javascript was not successfully connected.

This was remedied by amending the file structure in the project - while repl.it could utilise the '../assets/....' structure taught in the course, GitHub Pages could not. 
As such this was amended to 'assets/....' which fixed the issue.


Code was locally viewed and edited via repl.it.




## Known issues
- Due to the recommendation that the main image was changed - a transparent background over the original image as it changes - a small issue has been generated.

Despite the images being the same exact size, they do not line up perfectly. Through various browser inspector trials, it the overlay image was lined up using a width modifier of 97.5%, which looks great on most displays. On small displays however, the an overhang of the main image persists, which isn't remedied by the overflow css option.

Additional media query options will be investigated to remedy this.

- Styling was added via html on the EmailJS template which successfully appeared on the site preview. This styling did not appear in the final email however, hence the plain styling of the email that is received by the customer. Future emails would ideally be on-brand to give end-user consistency.
EmailJS documentation states that html/css styling is supported however do not seem to have any FAQs offering assistance with this.

## Attributation

 Site background image: 
https://www.pexels.com/photo/grey-abstract-wallpaper-3137052/

Main sofa image by CAMACHO03: https://pixabay.com/photos/sofa-orange-cushion-furniture-5213406/

- Footer details adopted from 'Another simple footer' by toama:
https://codepen.io/toamaenepitin/pen/gObvrxd


- JQuery assistance from StackOverflow:
https://stackoverflow.com/questions/12631746/change-css-based-on-drop-down-selections-value-using-jquery

https://stackoverflow.com/questions/10412103/populate-form-with-localstorage

- Assistance with price calculations: 

https://www.sitepoint.com/community/t/simple-price-calculator/7919/2

- Assistance with Date.now to generate unique IDs: https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13

- Assistance with the CSS filter used to generate the image colours: https://css-tricks.com/almanac/properties/f/filter/

- Assistance with scrolling behaviour: https://stackoverflow.com/questions/45599455/change-logo-on-scroll-bootstrap-3

- Assistance with pushing content out of the way of the dropdown: https://stackoverflow.com/questions/22564817/bootstrap-collapsed-menu-not-pushing-content-down-when-expanded

- Removal of the main image background utilised www.remove.bg 

