# React useEffect setInterval Missing Dependency Bug

This repository demonstrates a common React bug involving the `useEffect` hook and `setInterval`.  The bug occurs when a state variable is used within a `setInterval` callback, but the state variable is not included in the `useEffect`'s dependency array. This leads to stale closures and unexpected behavior. The solution shows the correct way to use `setInterval` with `useEffect`.

## Bug
The initial code uses `setInterval` to log the `count` variable every second, but the dependency array in `useEffect` is empty.  This means that the `setInterval` callback always refers to the initial value of `count` (0), even after the button increments it.

## Solution
The solution includes the `count` state variable in the `useEffect` dependency array. Now, `setInterval` will correctly update every time `count` changes.