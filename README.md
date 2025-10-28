# 🍔 Async Food Order Simulation

Hey there! 👋
This little project is part of my **JavaScript learning journey**, where I’m exploring how **asynchronous code** works using **Promises** and **async/await**.

Basically, it simulates a cashier receiving an order and cooking food one by one — just like a real restaurant kitchen, but in code form. 😄

## 🎯 What I’m Practicing
- Writing Promises and handling them properly

- Using async / await for cleaner asynchronous flow

- Handling delays with setTimeout()

- Catching possible errors with try...catch

It’s a simple script, but it really helped me understand how async operations work under the hood!

## 🧑‍🍳 How It Works

When the cashier gets an order, the cooking process starts — one food item at a time.

Each item takes a different amount of time to "cook" (simulated using setTimeout()).

Example console output:
```terminal
Cashier: Order received! Starting to processing order...
Burger is Cooked in 3 Sec...
Burger is successfully cooked!
Kentang Goreng is Cooked in 1 Sec...
Kentang Goreng is successfully cooked!
Minuman is Cooked in 0.5 Sec...
Minuman is successfully cooked!
Cashier: All of the order has been finished!
```

## ⚙️ How to Run It
1. Clone this project:
```bash
git clone https://github.com/your-username/async-food-order.git
# or you can download it via github zip download
```
2. Go into the folder:
```bash
cd async-food-order
```
3. Run it with Node.js:
```bash
node FastFoodSimulation.js
```

## 🧠 A Little Note

This is just a small step in my journey to understand JavaScript better — especially the asynchronous side of it.
I’m learning how to think in async patterns, which I know will help me a lot later in backend development!

## 🔮 Future Improvements
Here are a few things I might explore next:

- 🔁 Run multiple cooking processes in parallel using Promise.all()

- ⚠️ Add error simulation, like when a food “burns” or fails to cook

- 🕹️ Create a simple interactive version in the browser

- 📦 Maybe connect it to an Express.js server later for fun!

<hr>

### ✨ Author
Mikel

Learning backend development and documenting every small step along the way 🚀
