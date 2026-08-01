export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">

      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-8 pt-32">

        <div className="w-full lg:w-1/2">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Mercado Livre • Shopee • Amazon • Magalu
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-slate-900">
            Venda mais.
            <br />
            Cresça com consistência.
            <br />
            Escale com tecnologia.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
            A VANZASHOP ajuda marcas e sellers a transformar operação, dados e estratégia em crescimento real nos principais marketplaces do Brasil.
          </p>

          <div className="mt-12 flex gap-5">

            <a
              href="https://www.mercadolivre.com.br/pagina/vanzashop"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 px-8 py-5 font-bold text-white transition hover:bg-blue-700"
            >
              Comprar produtos
            </a>

            <a
              href="https://wa.me/5554999981574"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-8 py-5 font-bold hover:bg-slate-100"
            >
              Falar com um especialista
            </a>

          </div>

        </div>

        {/* Dashboard */}

        <div className="hidden w-1/2 justify-end lg:flex">

          <div className="w-[470px] rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">

            <h3 className="text-xl font-bold">
              Painel VANZASHOP
            </h3>

            <div className="mt-8 space-y-5">

              <div className="flex justify-between rounded-xl bg-slate-50 p-4">

                <span>Mercado Livre</span>

                <span className="font-bold text-green-600">Online</span>

              </div>

              <div className="flex justify-between rounded-xl bg-slate-50 p-4">

                <span>Shopee</span>

                <span className="font-bold text-green-600">Online</span>

              </div>

              <div className="flex justify-between rounded-xl bg-slate-50 p-4">

                <span>Amazon</span>

                <span className="font-bold text-green-600">Online</span>

              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-blue-50 p-5">

                  <p className="text-sm text-slate-500">
                    Pedidos
                  </p>

                  <h2 className="mt-2 text-3xl font-black">

                    +312

                  </h2>

                </div>

                <div className="rounded-xl bg-orange-50 p-5">

                  <p className="text-sm text-slate-500">
                    Avaliação
                  </p>

                  <h2 className="mt-2 text-3xl font-black">

                    4.9★

                  </h2>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
