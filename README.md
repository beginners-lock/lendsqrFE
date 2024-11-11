# Lendsqr Frontend Engineer Assessment

Link to Live Preview
[Live Preview of Submission (Chukwu Rophi)](https://rophi-chukwu-lendsqr-fe-test.netlify.app/)

## Project Description

Using React and Sass to replicate a [Figma Design](https://www.figma.com/design/ZKILoCoIoy1IESdBpq3GNC/Lendsqr-Frontend-Engineering-Assessment?node-id=5530-0&node-type=canvas&t=qSXbJG0rT5GTTXwM-0) as part of the requirements of a frontend engineering assessment by Lendsqr.

## How to install Install and Run the Project

- First of all ensure that you have [nodejs](https://nodejs.org/en) installed on your system. You can check this by running `node -v` on your terminal or command prompt. If you don't get any errors you're fine.
- Now pull this project to any folder of your choice using the necessary git commands and run `npm install` to install all the necessary dependencies.
- When that is done run `npm run dev`.

## File Structure

From the project root we have two folders `/public` and `/src`.

- The `/public` folder contains all images used and has a '/json' folder which contains the json file with the 500 mock user records used for this project.
- The '/src' folder, further contains 5 folders:
  - The '/utils' folder contains:
    - `contexts.ts` - This file contains and exports all the React Contexts used in this project.
    - `types.ts` - This file contains all the variable (Typescript) type descriptions used in this project.
    - `routes.ts` - This file contains all the routes in the project.
    - `functions.ts` - This file contains all global functions used within the project so that it may be accessed by any component.
  - The `/styles` folder contains all the Sass files for the various pages and components in the project.
  - The `/fonts` folder contains all the external fonts used in this project.
  - The `/pages` folder contains all the pages in this project which are 4 in number:
    - `Signin` viewable at `https:\\hostname\signin`
    - `Users` viewable at `https:\\hostname\dashboard\users`
    - `UserDetails` viewable at `https:\\hostname\dashboard\userdetails`
    - `Dashboard`: This is basically the parent route for `Users` page and `UserDetails` page
  - The `/components` folder contains all the reusable components in the project


## APIs and Libraries

### JSON Generator

The [JSON Generator](https://json-generator.com/) api was used to generate the 500 user records that are used as mock data for the table in the Users Page. To generate a similar set of mock records you can run this in the [website](https://json-generator.com/).

```
  [
  '{{repeat(500, 500)}}',
  {
    index: '{{index()}}',
    id: '{{objectId().toUpperCase()}}',
    status: '{{random("Inactive", "Active", "Blacklisted", "Pending")}}',
    fullname: '{{firstName()}} {{surname()}}',
    stars: '{{integer(1, 3)}}',
    gender: '{{gender()}}',
    children: '{{random("None", "1", "2", "3", "4", "5")}}',
    residence: '{{random("My Apartment", "Parent\'s Apartment")}}',
    maritalstatus: '{{random("Single", "Married")}}',
    organization: '{{company()}}',
    email: '{{email()}}',
    phone: '{{phone()}}',
    date: '{{date(new Date(2014, 0, 1), new Date(), "MM-dd-YYYY hh:mm ")}}',
    bvn: '{{integer(1000000000, 9999999999)}}',
    
    bankamount: '{{floating(100000, 1000000, 2, "₦0,0.00")}}',
    banknumber:	'{{integer(1000000000, 9999999999)}}',
    bankname: '{{company()}}',
    
    employmentstatus: '{{random("Unemployed", "Employed")}}',
    sector: '{{random("Finance", "Telecommunication", "Healthcare", "Fashion", "Entertainment", "Construction", "Marketing",  "Aerospace", "Agriculture", "Marketing",  "Education", "Media & News", "Technology" )}}',
    loanrepayment: '{{integer(10000, 100000, "₦0,0")}}',
    monthlyincome:'{{integer(1, 10)}}',
    duration: '{{random("2", "3", "4", "5", "6", "7")}}',
    education: '{{random("B Sc.", "B A.", "PhD", "M Sc.", "M A.")}}',
    
    withloans: '{{bool()}}',
    withsavingss: '{{bool()}}',
    
    guarantor: {
      name: '{{firstName()}} {{surname()}}',
      email: '{{email()}}',
      phone: '{{phone()}}',
      relationship: '{{random("Father", "Mother", "Brother", "Sister", "Friend")}}'
      
    }
  }
]
```

### React Countup

This library is what provides the count up animation for the numbers on the cards in the `Users` page. For more information on this library, you can check out the [documentation](https://www.npmjs.com/package/react-countup)


## Contexts

The project contains only two contexts:

- `SigninUserContext` - This context is used to store the signin in user after authentication and is very important in determining if a user is authorized to view certain pages (`Dahsboard`, `Users` and `UserDetails`). Due to the lack of persistent of the React contexts on reload, the signed in user details is additionally stored with [localStorage](https://www.w3schools.com/jsref/prop_win_localstorage.asp)
- `ActiveModalContext` - This is the context that determines which modal is visible or not. It is very important context for the 'result filter' and 'more options' modals used in the `Users` page table and also for the 'SideNav' and the 'SearchBar' modals that become active on small screens.


## Methods for Storage and Persistence

As earlier mentioned the details of the authenticated user is stored with `localStorage` and this is also applied to the storing of specific user whose details we are viewing in `UserDetails` page. This helps to maintain persistence even with page reloads. 

Due to the assessment being for frontend, I tried as much as possible to not use any backend related technology so therefore there wouldn't be any need to `asynchronous awaits` for pending data. Also the use of pagination would help reduce the burden of rendering large lists at once, hence there was no need for 'spinners' or 'loading' components.

The data gotten from the JSON Generator API is stored in the `/public/json/generated.json` file and is called on `Users` page load. All changes done to the data like activating and blacklisting users is not persistent on page reload because it is not editing the json file instead it is editing the data state. Writing to files is not  a client side enabled feature and hence I believe applying that feature for persistence would have been beyond the scope of this assessment. There was the option of using the localStorage to make it persistent, but I believe storing 500 records of data on `localStorage` is a bit of bad programming practice.

## Features
- Signin Page
  To sign in you simply need to put any email (there is no need for a password in this submission) but if you try to sign in without an email input in the email field you will get an error.
  If you have not been authenticated (have not signed in) you will not be able to visit the `https://hostname/dashboad/users` and `https://hostname/dashboad/userdetails` routes.

- Top Navigation Bar and Side Navigation Bar
  This component shows all the nav options when viewed on the laptop or wider screens but on mobile screens or smaller screens, you would see some certain differences. The 'search input', 'docs' and
  'notification' would no longer be visible as there would be some trouble getting them to fit. You would also see some new icons such as a menu burger icon on the far left and a search icon to the left     of the avatar. Clicking the avatar icon would slide in a nav bar from the right containing the nav options that were not visible and clicking the menu burger icon would slide in the Side Navigation Bar.
  The Side Navigation Bar is interactable on click but does not redirect or change url.
  
- Users Page and User Details Page
  This page contains the users table records which draws its data from the json mock data. The cards in the page also draw data from the json mock as you would notice when certain features change they       would update as well. Clicking the filter icon on the table header brings out the `Filter Modal` which can currently only filter by status. Clicking the three dotted icon at the end of each row would      bring out the the `Options Modal` which can be used to 'Activate' or 'Blacklist' the user when click. Additionally you can view more details about the selected user by clicking the 'View Details' on the   `Options Modal`.

