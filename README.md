# useModalControl for React

## Introduction

Modal windows are an essential part of the UI in modern web applications. Managing them in React can be challenging, especially when trying to prevent multiple windows from appearing simultaneously. The `useModalControl` hook simplifies this task.

## Problem

Developers often face the challenge of controlling the states of multiple modal windows. A lack of centralized management can lead to confusion in the processes of opening and closing windows, which in turn increases the risk of errors and degrades the overall user experience.

## Solution

The `useModalControl` hook provides a practical solution for managing modal windows. This tool gives developers the ability to control the opening and closing of windows through a simple and intuitive API. With `useModalControl`, you can easily prevent multiple windows from opening at the same time, maintaining order and cleanliness in the code.

## How It Works

The `useModalControl` hook uses a single flag in the global store to manage all the modal windows of the application. This eliminates the risk of accidentally opening the wrong window or multiple windows appearing simultaneously. Thanks to strict typing, you will always be aware of which window options are available for use. Additionally, `useModalControl` allows you to pass additional data to the modal window that will be relevant exclusively for the currently open window and will be retained until it is closed. The typing of the transmitted data provides additional confidence and convenience in using the hook.

## Step-by-Step Guide: Implementation on the Stack React, Redux Toolkit, TypeScript, Material UI

### Step 1

Create a file with unique identifiers for our modal windows. This file will serve as a centralized repository of window names and must be updated when adding new modal windows to the application.

### Step 2

Create an `appSlice` in the global store, which will be responsible for storing the unique name of the active modal window and, if necessary, additional data associated with this window.

### Step 3

The `useModalControl` Hook

`useModalControl` returns an object containing variables in the format `is<WindowName>Modal`, which indicate whether the modal window with the corresponding name is open at the moment. In addition, an `options` object is provided, including `openModal` and `closeModal` functions for managing the state of dialog windows. There is also a `modalData` object containing data in the format `<windowName>ModalData`, necessary for each dialog window.

## Conclusion

The `useModalControl` hook is a convenient tool for managing modal windows in React applications. It provides a simple and intuitive way to control modal windows, improving code quality and user experience. By using `useModalControl`, developers can avoid confusion and make their applications more reliable.
