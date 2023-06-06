import Figure from './figure'

export default function Quote() {
  return (
    <>
      <article className="w-1/2 grow font-serif text-[5vmin] text-white sm:text-[4vmin]">
        {/* <q>
        Senioridade, acima de tudo, é uma questão de postura.
        <br />
        De nada vale um currículo todo enfeitadinho se, na hora do pega, tu não assume teus BO.
      </q> */}
        <q>
          Seniority, above all, is a matter of posture.
          <br />
          It&apos;s useless to have a fancy resume if, when everything is
          falling apart, you can&apos;t handle your mess.
        </q>
        <strong className="mt-5 block text-right">– Felipe Fett</strong>
      </article>

      <aside className="ml-auto mt-auto flex flex-col justify-end">
        <Figure />
      </aside>
    </>
  )
}
