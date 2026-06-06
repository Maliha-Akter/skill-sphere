export async function getCard() {
  const res = await fetch("https://skill-sphere-psi-tawny.vercel.app/data.json");
  const data = await res.json();
  return data;
}
// https://skill-sphere-psi-tawny.vercel.app/data.json