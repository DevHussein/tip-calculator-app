import { Box, Button, Center } from "@chakra-ui/react";
import type { Route } from "./+types/home";
import TipCalculator from "~/tip-calculator/tip-calculator";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_VERCEL };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <TipCalculator />;
}
