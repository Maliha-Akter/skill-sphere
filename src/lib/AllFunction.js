export async function getCard() {
  const res = await fetch("https://skill-sphere-psi-tawny.vercel.app/data.json");
  const data = await res.json();
  return data;
}
// https://skill-sphere-psi-tawny.vercel.app/data.json

export async function getStudy() {
  const res = await fetch("https://skill-sphere-psi-tawny.vercel.app/learn.json");
  const data = await res.json();
  return data;
}

export async function getTime() {
  const res = await fetch("https://skill-sphere-psi-tawny.vercel.app/time.json");
  const data = await res.json();
  return data;
}
export async function getTech() {
  const res = await fetch("https://skill-sphere-psi-tawny.vercel.app/tech.json");
  const data = await res.json();
  return data;
}