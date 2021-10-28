//function to sleep for the animation
export default function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
