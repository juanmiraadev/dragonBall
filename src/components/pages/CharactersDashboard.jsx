import { useEffect, useState } from "react";
import CharactersCard from "../ui/CharactersCard";
import Hero from "../ui/Hero";

export default function CharactersDashboard() {
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true)
        setError("")

        const response = await fetch("https://dragonball-api.com/api/characters")

        if (!response.ok) {
          throw new Error("Error al cargar los personajes")
        }

        const result = await response.json()
        setCharacters(result.items)

      } catch (err) {
        setError("No se han podido cargar los personajes")
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters();
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <section className="w-full h-full">
      <Hero />
      <div className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
        {characters.slice(0, 6).map(charac => (
          <CharactersCard key={charac.id} character={charac} />
        ))}
      </div>
    </section>
  )
}