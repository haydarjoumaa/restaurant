"use client";

import React from "react";

import { useFormStatus } from "react-dom";

function ButtonMeals() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Pending" : "Share Meal"}
      {pending}
    </button>
  );
}

export default ButtonMeals;
