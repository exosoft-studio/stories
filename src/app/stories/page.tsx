import Section from "../../components/partials/section";
import StoriesList from "./stories-list";


export default function StoriesPage() {
  return (
    <main className="text-2xl lg:text-3xl text-color1">
      <Section className="flex flex-col items-center px-10 space-y-10">
        <h1 className="text-6xl">Liste des nouvelles</h1>
        <p><b>Stories est encore à la version alpha. Les nouvelles présentées sont encore à l'état de manuscrit et seront en phase de réécriture ultérieurement. L'objectif du site est d'avoir des retours d'alpha-lecteurs sur l'univers présenté.<br/><br/>Bonne lecture à tous</b></p>
        <StoriesList />
      </Section>
    </main>

  )   
}