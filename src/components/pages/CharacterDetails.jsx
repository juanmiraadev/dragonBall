import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Hero from "../ui/Hero";
import { useNavigate } from "react-router-dom";

export default function CharacterDetails() {
  const { id } = useParams();
  const numericId = Number(id);
  const navigate = useNavigate();

  const [character, setCharacter] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const isInvalidId = Number.isNaN(numericId) || numericId < 1 || numericId > 6;

  const description = character.description ?? "";
  const isLongDescription = description.length > 500;
  const previewDescription = isLongDescription
    ? `${description.slice(0, 500)}…`
    : description;

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://dragonball-api.com/api/characters/${id}`
        );

        if (!response.ok) {
          throw new Error("Error al cargar el personaje");
        }

        const result = await response.json();

        setCharacter(result);
      } catch (err) {
        setError("No se ha podido cargar el personaje");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (isInvalidId) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <section
      className={`w-full flex flex-col gap-4 px-10 lg:px-32 py-8 lg:py-12 ${expanded ? "" : "h-screen overflow-hidden"
        }`}
    >
      <Hero />
      <div className="w-full flex flex-col lg:flex-row gap-8 flex-1 min-h-0 items-center lg:items-start">
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-start shrink lg:shrink-0 min-h-0">
          <div className="flex flex-col gap-2">
            <Link onClick={() => navigate(-1)} className="sticky top-0 z-10 self-start bg-DragoWhite px-4 py-2 font-bold text-DragoGray text-2xl shrink-0">← Volver</Link>
            <div className="border-DragoGray border-4 rounded-tr-4xl rounded-bl-4xl bg-DragoAccentRed p-4">
              <img className="w-80 lg:w-96 h-auto max-h-[28vh] lg:max-h-[55vh] object-contain" src={character.image} alt="character" />
            </div>
          </div>
        </div>
        <div className="w-full max-w-80 lg:max-w-none mx-auto lg:mx-0 lg:w-[50%] flex flex-col gap-4 font-anton text-DragoGray min-h-52 flex-1 overflow-hidden lg:flex-none">
          <h3 className="text-4xl font-bold shrink-0">{character.name}</h3>
          <p
            className={`text-xl min-h-0 overflow-hidden ${expanded ? "" : "line-clamp-3 sm:line-clamp-5 lg:line-clamp-8"
              }`}
          >
            {expanded ? description : previewDescription}
          </p>
          {isLongDescription && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="self-start font-bold shrink-0 text-DragoAccentRed hover:underline"
            >
              {expanded ? "Leer menos" : "Leer más"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
