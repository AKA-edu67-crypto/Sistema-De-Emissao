# 🎫 Virtual Boarding Pass Formatter

A simple JavaScript project that simulates how an airline system formats passenger information before printing a boarding pass.

## 📖 About

This project focuses on one of the most common tasks in software development: **formatting raw data for display**.

Instead of simply printing variables, the application transforms each piece of information into a standardized format, similar to what real reservation systems do.

The project demonstrates practical usage of JavaScript string methods while creating a clean terminal-based boarding pass.

---

# ✨ Features

* Formats flight numbers with leading zeros.
* Aligns seat numbers using fixed-width formatting.
* Creates perfectly aligned text columns.
* Masks sensitive loyalty card numbers.
* Prints a visually organized boarding pass.

---

# 🧠 Concepts Practiced

## `padStart()`

Used to add characters at the **beginning** of a string until it reaches a desired length.

Example:

```
421
```

becomes

```
00421
```

This is commonly used for:

* Flight numbers
* IDs
* Invoice numbers
* Ticket numbers
* Employee codes

---

## `padEnd()`

Adds characters to the **end** of a string.

This allows text to occupy a fixed amount of space, making columns align perfectly.

Example:

```
Paris..........
```

This technique is widely used in:

* Terminal applications
* Reports
* Receipts
* Logs
* Tables

---

## `slice()`

Extracts a portion of a string.

The project uses:

```javascript
slice(-4)
```

to retrieve only the last four digits of the loyalty card number.

Example:

```
45321098
```

becomes

```
1098
```

---

## Data Masking

Sensitive information should rarely be displayed completely.

This project combines `slice()` and `padStart()` to hide all digits except the last four.

Example:

```
45321098
```

becomes

```
****1098
```

This is a common security practice used in:

* Credit cards
* Bank accounts
* Loyalty programs
* Phone numbers
* Personal IDs

---

# 🏗 Project Structure

```
project/
│
├── index.js
└── README.md
```

---

# Example Output

```
=========================================
       🎫 BOARDING PASS
=========================================
PASSENGER...: Zellyn D. Silva || DESTINATION...: Paris..........
FLIGHT...: 00421    SEAT...:  7A
MILES...: ****1098
=========================================
```

---

# 📚 What I Learned

Through this project I practiced how to:

* Standardize values before displaying them.
* Format text for readable console output.
* Use `padStart()` and `padEnd()` effectively.
* Mask sensitive information securely.
* Build clean, organized terminal interfaces.

Although simple, these formatting techniques are heavily used in real-world backend systems, reporting tools, booking systems, banking software, and command-line applications.

---

# 🛠 Technologies Used

* JavaScript (ES6)
* Node.js (Console)

---

## Author

Developed as a JavaScript practice project focused on mastering string manipulation and real-world data formatting techniques.
