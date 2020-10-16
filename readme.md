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

Finally there are contact details (which are presented in a closable modal window) and social media links for the customers perusal.

## Design Decisions

### General Design
I decided to go for a light coloured theme along with a slightly childish title font, hopefully to reinforce the 'paint' theme.

I settled again for Lato as the font for the body, since it's easy on the eyes and looks professional. On previous mentor advice, the beginning of the website has a rundown of what to expect, to ensure that the user does not feel lost in any way. 

They are then drawn to the main image below - focusing first on the bright colour change buttons. On clicking one (or more) of the buttons, the grey monotone image background changes to their chosen vivid colour that they are deciding between.
The design is meant to be eye catching and originally the image was in it's standard red, but the grey hue was added as the default so there is more of a stark difference when the user first makes their selection.

The buttons were also originally a dropdown menu as it was easier to incorporate the JavaScript around. A mentor meeting however highlighted the value in the user being able to preview their colour (in the button styling) and whereas the dropdown menu was below the image, the buttons were moved up top so the call to action was more prominent.

A mentor suggestion was also made for the 'choose this colour' below the image. This adds to ease of use for the client so that they don't have to scroll back up to recheck the colour name for their quote, they can instead click a single button which pulls their choice into the box.

The quote box was designed to be compact and straightforward - enter your details, see a price on demand and send it to yourself for your records. Saving this into the local storage was another ease of use choice, so that they are not constantly typing in their name and details if they want more than one quote - known to be frustrating from personal experience.

There originally also was no reset on the details, but was quickly added when it became clear that clearing the local storage is convoluted when you do not have a created option. Even then, there was no confirmation question so the data was just gone on a single click - convenient but error prone. A confirmation popup was added to reduce accidental clicking and user frustration.

As stated elsewhere in the readme document, EmailJS didn't appear to pass through CSS inline styling on the templates made. The template originally had a background colour, border lines around the quote and text styling to make it not plain-looking. Due to these not coming through in tests, the template was revised to plain-text, though this doesn't relay the rounded user experience that I hoped for.

A modal was chosen for the contact details, since an additional page seemed redundant and the additional writing on the page didn't seem to have a place. The modal allows the details to be prominent and easy to copy should they choose. In the real world also, the social links would lead to the social pages for the actual company, rather than the main sites.

Finally a note on the navbar. A fair amount of change went into this as finding a good middle-ground took some effort. Due to the one-page nature of the site, the nav links remaining at the top seemed to not be user-friendly. When the nav links scrolled with you, they would blend into the background content with the navbar being transparent, which i didnt want to get rid of as it looks clean and neat.

As such, JavaScript was used to allow the transparent nav at the top, but a translucent appearance added on scroll. This allows the nav content to be seen, even if it does flow over the page content. An effort has been made for this not to be the general case however in the site content being restricted in width and the brand minimising to it's first letter on scroll, so both sides of the nav flow either side of the page content.


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
- JQuery addon used for rich function searching in order to appropriately target html and CSS for site functionality.
- GitHub - utilised for cloud backups and project progression.
- GitHub Pages - an aspect of Github, used to deploy the finalised product.
- Figma - used to create wireframe ideas of how the website should look and function. Used as an alternative to Balsamiq to get a feel for other programs
- Replace.bg - utilised to remove the background from the main site image for the colour overlay.
- realfavicongenerator.net - used to correctly generate site favicon


## Testing

### Validation service

#### HTML
The HTML validator picked up several errors including: 
- Missing alt attributes on the main image - this was added.
- Missing alt attributes on the main image overlay - this was also added.
- Contrasting id and label names on the quote box and it's overlay - the names were amended to match, removing the error.
- A warning regarding a missing header in the 'quote' section - the section was moved to incorporate the existing header which was outside of it at time of checking.
- The console flagged up a missing favicon (showing a 404 error - not found) - the favicon was generated and added to the site.

The takeaway from these points is that greater care and attention should be taken to ensure appropriate tagging on images is done at the time of addition. This minimises the need to rely on validators to pick up any erroneous code.

The HTML Validator is now shown to pass.


#### CSS
- As mentioned in 'Known Issues', the CSS validator picks up a margin-collapse CSS as an error.
  This was remedied by a mentor discussion and careful reading of the documentation where margin controls are less than clear on face value. 
- Bootstraps' built-in CSS is flagged as having several errors on the validator. 
  The course guidelines identify this also and it can be safely ignored. Copy and pasting the sites custom CSS does not show these errors therefore can be deemed correct.


The learning exercise here is to ensure that the documentation is thoroughly observed, along with using the browser inspector to amend css values - namely margins in this case - to find an appropriate solution without affecting the base code.

The CSS validator is now shown to pass.



#### JavaScript
As advised on the Assessment handbook, the JavaScript on this project was run through JShint. 

- A missing semicolon was picked up in pricecalculator.js - this was added.
- Three additional semicolons were identified - these were removed and the code checked to ensure continued functionality.
- Several variables were classed as undefined, but this was due to the HTML not being accessed by the validator and the '$' symbol used by JQuery not being recognised as belonging to JQuery.

These can be seen here:

![JS01](https://user-images.githubusercontent.com/61311614/96256513-ba593000-0fb0-11eb-867e-6f576e6d9e7d.png)

Future coding exercises would be well-served by using this exercise to ensure correct semicolon use. The code was still functional, but not completely correct therefore using this service is an excellent method of ensuring correct syntax. 

The JShint validaor is now shown to pass (except the undefined variables, which as above are expected.)

![JS02](https://user-images.githubusercontent.com/61311614/96256565-cd6c0000-0fb0-11eb-802f-51eaf15ae3b1.png)

#### Wave(WebAIM) validator

Although this isn't a necessary step, I found in my previous project that a user-experience validator, both for screenreaders and users who are partially sighted, is very useful.

As we are making websites that aim to be used by the largest audience possible, I like to add this as an additional check.

The following website was used to assess compatibility with screenreaders
https://wave.webaim.org/

It located the following:

- Errors - Empty button found, but this is just the three bar dropdown for responsive behaviour

- Contrast Errors - These have been located on the colour choice buttons, however they have been specifically chosen to reflect the colours of the background.

  User Experience is deemed to be more important however so using the wave validator, darker colours were chosen and implemented so that the buttons passed AA rating for normal text. AAA was deemed to be so dark that the colour wasn't recognisable - defeating the point in my opinion so AA rating was settled on.

  As in my previous project, the other contrast errors are in the bootstrap standard buttons, which do not pass validation. It was recommended that I restyle these so that they do pass this time, which has now been done.

The process can be seen below, where the elements are highlighted and using a drag bar, the colours are seen to either pass or fail the 'AA' or 'AAA' ratings:

Before (Blaze Red):

![WA01](https://user-images.githubusercontent.com/61311614/96256268-40c14200-0fb0-11eb-8992-7ea45de978bc.png)

After (Blaze Red):

![WA02](https://user-images.githubusercontent.com/61311614/96256282-461e8c80-0fb0-11eb-8eaa-d53d19e0d837.png)

The other highlights of the validator were positive, such as aria usage and header/footer tags.


### Page links

#### PaintPeruser logo
Should navigate back to index.html - confirmed.

#### Navigation bar
Intro - Leads to top of index.html
Colours - Leads to 'Pick your colour'
Quote Me - Leads to 'Get your quote'

#### Footer
Contact Us - Opens modal with contact details in.
Facebook - Should link to www.facebook.com - currently leads to https://wrightdang.github.io/PaintPeruser/www.facebook.com . Amended to https://www.facebook.com as a fix.
Twitter - as above respective to Twitter.
Linkedin - as above respective to Linkedin.


### Page buttons

#### Three bar button (on navbar)

Appears on page scroll and on tablet media and smaller - confirmed. 

On click - drops down the nav menu and links still function - confirmed.

#### Colour pick buttons

All buttons should change the image below to their respective CSS filter once clicked - confirmed and other CSS classes are successfully removed also.

#### Choose this colour button

Should pull the current colour selection down to the 'colour choice' button in the form section - confirmed. Price also confirmed to change accordingly.

#### Save these details button

Expected to store the current user information into the browser local storage - confirmed. 

User information is overwritten on second click, as a user would expect.

#### Reset these details button

Expected to generate a confirmation message, and once confirmed clear any saved data from the local storage - confirmed.

#### Send quote button

Should use EmailJS to send an email to the stated address, utilising the details that the user has input into the form boxes - confirmed.

#### Mailto link on modal

Should launch a mail client on the computer of the user, filling in the 'to' field with the email address listed - confirmed.

#### Phone call link on modal

Should launch the phone app with the provided phone number if the user is accessing via mobile. - confirmed on Samsung Galaxy Note 10.


### Responsiveness 

There are a couple of identified responsive issues on smaller devices:
- the main image overlay doesn't sit completely correctly over the underlay image - mentioned above. Additional media query sizes added to make them as close as possible on all devices.
- the 'save these details' and 'reset these details' buttons sit too closely on top of one another on smaller devices - spacing between them added as media queries.

Due to the usage of bootstrap on this site, the remainder of the site behaves well and responds appropriately with window size.

This has been tested using the following settings on Firefox Developer Tools:
Galaxy S9/S9+
iPad
iPhone 6/7/8
iPhone 6/7/8 Plus
iPhone X/XS
Kindle Fire HDX


### Browsers

The below browsers have had the website opened, navigated through and confirmed to be functional, alongside going through the above testing points:
- Firefox
- Chrome
- Microsoft Edge


### Testing that GitHub pages matches development version.
It was observed that the Github pages version of the website took 10-15 minutes to reflect the development changes after a deployment.

Aside from that, the final Github version matches the development version that is hosted on Repl.it.


## Known issues

- Due to the recommendation that the main image was changed - a transparent background over the original image as it changes - a small issue has been generated.

  Despite the images being the same exact size, they do not line up perfectly. Through various browser inspector trials, it the overlay image was lined up using a width modifier of 97.5%, which looks great on most displays. On small displays however, the an overhang of the main image persists, which isn't remedied by the overflow CSS option.

  Additional media query options have been looked into and additional breakpoints have had new width percentages added to try to cater to all audiences.

- Styling was added via html on the EmailJS template which successfully appeared on the site preview. This styling did not appear in the final email however, hence the plain styling of the email that is received by the customer. Future emails would ideally be on-brand to give end-user consistency.
EmailJS documentation states that HMTL/CSS styling is supported however do not seem to have any FAQs offering assistance with this.

- The CSS Validator flags up an aspect of the footer (margin-top: 16px 0;). This is margin-collapse CSS which means that there is no excess grey bar above the footer, which is the preferred styling. According to W3 Schools, this is valid CSS: https://www.w3schools.com/cssref/pr_margin-top.asp 
The W3C validation service however flags this as an error.

  Through a mentor conversation, this was remedied by more thorough document analysis, and some well-timed advice on the usage of browser inspection tools. The issue has now been fixed but the documentation left here to show the learning element of the scenario.


## Future improvements

- As mentioned above, one of the main improvements to the user experience would be a better template for the quote email.
  With CSS styling successfully added to this it would round out the user experience, keeping all communication from the site consistent and on-brand.

- A final mentor conversation identified that the useage of the built-in JavaScript 'alert()' functions are functional, but not utilised as much in modern websites any more.
  It was advised that going forward, should user information be needed to be presented, to use custom modals like has been used for my contact information. This would be cleaner and again make a more rounded user experience.

- Additional images added, perhaps in a side-scrolling fashion would more actively engage the user. 
  This was not carried out at this time due to the hue-values being troublesome to match across images with a different starting colour. 
  If image colours were edited to match then this would be one way forward, or actual photos taken by the site designer so that all images start from a similar baseline would be another.
  Should the PaintPeruser business be a real one, actual colours would exist though and would be significantly easier to select between.


## Deployment Procedure
- Github pages utilised for deployment - process as follows: 
- Navigate to https://github.com/WrightDanG/PaintPeruser/ -Settings, scroll down to Github pages -Select the master branch, root directory and click deploy. -Site is hosted at https://wrightdang.github.io/PaintPeruser/

On the first navigation, a 404 error was presented. Manually navigating to https://wrightdang.github.io/PaintPeruser/index.html resolved this and the website remained stable after that.

In addition, on first hosting the main image was non-functional and the JavaScript was not successfully connected.

This was remedied by amending the file structure in the project - while repl.it could utilise the '../assets/....' structure taught in the course, GitHub Pages could not. 
As such this was amended to 'assets/....' which fixed the issue.


Code was locally viewed and edited via repl.it.


## User story walkthroughs

### User A - New Customer

The user on visiting the site is presented with the site brand, the navigation of where they can go and a call to action of 'Visualise Your Space' The intention is to have them start to think about their own decorating requirements.

They are immediately then presented with 'How it works' ideally dispelling any questions they may have about the site, guiding them on what they can do whilst visiting. They are instructed to find the colour that they like:

![PP01](https://user-images.githubusercontent.com/61311614/96046237-0ef29300-0e6b-11eb-8b48-6a05d599b53d.png)

Below this, they are asked to pick their colour and presented with seven options which are directly above a central image with a plain, grey background:

![PP02](https://user-images.githubusercontent.com/61311614/96048439-870e8800-0e6e-11eb-8c8a-ddc6e9002dd0.png)

The buttons which are coloured to both be eye-catching, and to reflect the colours that they represent. This was deemed to be more appealing and user-friendly than a dropdown, which was originally planned for.

On clicking them, the image changes to show the wall colour which matches their choice, allowing them to, hopefully, visualise the colour in a room as opposed to a boring paint swatch:

![PP03](https://user-images.githubusercontent.com/61311614/96049600-27b17780-0e70-11eb-85ce-ab54a6d501a3.png)

![PP04](https://user-images.githubusercontent.com/61311614/96049724-57f91600-0e70-11eb-8a6d-28a6e18a15c4.png)

On scrolling down, a central 'choose this colour' button allows them to pull the colour directly down into the relevant quote box field:

![PP05](https://user-images.githubusercontent.com/61311614/96049900-a1e1fc00-0e70-11eb-91a3-ad4150a20124.png)

![PP06](https://user-images.githubusercontent.com/61311614/96049995-d0f86d80-0e70-11eb-919a-9ca727844295.png)

They can see this directly below the button and prompts them to input their details if they would like a quote:

![PP07](https://user-images.githubusercontent.com/61311614/96050065-ef5e6900-0e70-11eb-8a3f-4212023864bb.png)

For user ease, the price is generated in the box also but the details, once input can be saved to the users browser if they wish. If they were to do this and refresh the page, their details would remain:

![PP08](https://user-images.githubusercontent.com/61311614/96050360-6267df80-0e71-11eb-92a2-33d0fe98979e.png)

Should they not want this, they can reset the information. Should it be an accidental click, there is a prompt which occurs to ensure that this is their intended course of action:

![PP09](https://user-images.githubusercontent.com/61311614/96050533-af4bb600-0e71-11eb-90c6-f6ac420b6f7f.png)

Once their details are entered (the fields are required), the user is able to send the quote to their email address. They receive a confirmation of sent message and an email is received in their inbox:

![PP10](https://user-images.githubusercontent.com/61311614/96050604-cf7b7500-0e71-11eb-9c70-740154e6b285.png)

That email has the details of their quote, alongside contact details to take the order further if they want to:

![PP11](https://user-images.githubusercontent.com/61311614/96050712-0487c780-0e72-11eb-8baa-2e1594aefe46.png)

These contact details can also be found at the bottom of the page via a modal contact popup. These details are also a link to the users mail provider or phone app if they are accessing via phone:

![PP12](https://user-images.githubusercontent.com/61311614/96050754-18332e00-0e72-11eb-892b-f46cdbd8151b.png)

There is access in the footer to other contact details - Facebook, Twitter and Linkedin. The links currently go to just the standard sites as the company does not exist - but in a real use case they would go to the appropriate social sites.


### User B - Return Customer

A return user would have much the same journey in that they can take a look at the available colours and enquire. 

If they would have saved their details on the previous visit however, on page load they would scroll down to find them already there. They would be able to easily resend their last quote if they wished to or delete those details and make new ones. 


## Conclusion

In my opinion, the journey satisfies the proposed user story expectations listed at the beginning of the readme. The user is able to modify the site to visualise their paint choices and follow up, bringing value to the proposed business. 


## Attribution

- Site background image: 
  https://www.pexels.com/photo/grey-abstract-wallpaper-3137052/

- Main sofa image by CAMACHO03:
  https://pixabay.com/photos/sofa-orange-cushion-furniture-5213406/

- Footer details adopted from 'Another simple footer' by toama:
  https://codepen.io/toamaenepitin/pen/gObvrxd


- JQuery assistance from StackOverflow:
  https://stackoverflow.com/questions/12631746/change-css-based-on-drop-down-selections-value-using-jquery

  https://stackoverflow.com/questions/10412103/populate-form-with-localstorage

- Assistance with price calculations: 
  https://www.sitepoint.com/community/t/simple-price-calculator/7919/2

- Assistance with Date.now to generate unique IDs:
  https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13

- Assistance with the CSS filter used to generate the image colours:  https://css-tricks.com/almanac/properties/f/filter/

- Assistance with scrolling behaviour:
  https://stackoverflow.com/questions/45599455/change-logo-on-scroll-bootstrap-3

- Assistance with pushing content out of the way of the dropdown:
  https://stackoverflow.com/questions/22564817/bootstrap-collapsed-menu-not-pushing-content-down-when-expanded

- Removal of the main image background:
  https://www.remove.bg 

- Generation of the site favicon utilised:
  https://realfavicongenerator.net


