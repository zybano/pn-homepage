const checkIcon = 'https://www.figma.com/api/mcp/asset/3140b23c-6a37-4f35-8d4f-4d2cfe830f54';
const checkIconPhone = 'https://www.figma.com/api/mcp/asset/6cf0d600-226c-4081-9cbf-d5d2f4f8c392';

const DocumentationSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-24">
      <div className="container-custom font-geist">
        <div className="mx-auto mb-10 max-w-[748px] text-center">
          <h2 className="mb-4 text-[42px] font-semibold tracking-[-1.5px] text-[#040523] md:text-[56px] md:leading-[1.1]">
            Documentation was never your job
          </h2>
          <p className="text-[18px] leading-[27px] text-[#64748b]">
            Advanced AI that understands medical context, not just words.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-8 md:grid-cols-3">
          <article className="flex min-h-[486px] flex-col rounded-2xl border border-[rgba(105,107,124,0.2)] bg-white p-5 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]">
            <div className="mb-6 space-y-5 rounded-lg border border-[#e2e8f0] bg-[#e2edf8] p-4">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#535c68]" />
                <p className="text-[14px] leading-5 text-[#45556c]">
                  58yo M, chest pain radiating to left arm. Duration: 4 hours. PMH includes HTN, DM Type 2.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-[#f59e0b] bg-[#fff7ed] px-4 py-3">
                <div className="mb-1 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#fe9a00]" />
                  <span className="font-mono text-[12px] font-semibold uppercase tracking-[1px] text-[#bb4d00]">Memo</span>
                </div>
                <p className="text-[14px] leading-5 text-[#7b3306]">
                  Sarah, note the Troponin trend-it is borderline in the ER.
                </p>
              </div>
            </div>

            <h3 className="mb-2 text-[30px] font-semibold leading-[1.2] tracking-[-0.6px] text-[#040523] md:text-[32px]">
              AI captures the words; you capture the intent.
            </h3>
            <p className="mb-6 text-[14px] leading-5 text-[#64748b]">
              Context-aware annotations let you add clinical insights without breaking your workflow.
            </p>

            <div className="mt-auto flex items-center gap-2 rounded-lg bg-[#f1f2fe] p-3">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full">
                <img src={checkIcon} alt="" className="h-4 w-4" />
              </span>
              <p className="font-mono text-[14px] leading-5 text-[#5768fd]">Specialty templates: Cardiology, Surgery, IM</p>
            </div>
          </article>

          <article className="flex min-h-[486px] flex-col rounded-2xl border border-[rgba(105,107,124,0.2)] bg-white p-5 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]">
            <div className="mb-6 space-y-3 rounded-lg border border-[#e2e8f0] bg-[#e2edf8] p-4">
              <p className="text-[14px] font-semibold uppercase leading-5 text-[#45556c]">Assessment</p>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#535c68]" />
                <p className="text-[14px] leading-5 text-[#45556c]">
                  Likely <span className="font-medium text-[#5768fd]">NSTEMI</span> in the context of known{' '}
                  <span className="font-medium text-[#5768fd]">Ischemic Cardiomyopathy.</span> Troponin elevated at 0.8 ng/mL. EKG shows ST
                  depression in leads II, III, aVF.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Cardiology', 'Troponin', 'EKG'].map((chip) => (
                  <span key={chip} className="rounded-full bg-[rgba(87,104,253,0.16)] px-3 py-1 font-mono text-[12px] text-[#5768fd]">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="mb-2 text-[30px] font-semibold leading-[1.2] tracking-[-0.6px] text-[#040523] md:text-[32px]">Actually speaks Medic.</h3>
            <p className="text-[14px] leading-5 text-[#64748b]">
              Context-aware annotations let you add clinical insights without breaking your workflow.
            </p>
          </article>

          <article className="flex min-h-[486px] flex-col rounded-2xl border border-[rgba(105,107,124,0.2)] bg-white p-5 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]">
            <div className="mb-6 flex justify-center">
              <div className="relative h-[320px] w-[192px] rounded-[24px] border-8 border-[#1e2030] bg-[#040523] p-2 shadow-[0px_20px_60px_0px_rgba(4,5,35,0.3)]">
                <div className="h-full w-full bg-[#fafbff] px-4 pt-4">
                  <div className="mb-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5768fd]" />
                      <span className="text-[8px] font-bold text-[#314158]">PrecisionNote</span>
                    </div>
                    <span className="font-mono text-[8px] text-[#90a1b9]">14:23</span>
                  </div>

                  <div className="mb-8 flex flex-col items-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#10b981] to-[#059669]">
                      <img src={checkIconPhone} alt="" className="h-8 w-8" />
                    </div>
                    <p className="mb-1 text-[14px] font-medium text-[#040523]">EMR Synced</p>
                    <p className="mb-4 font-mono text-[8px] text-[#64748b]">Chart #47829 · Adaeze O.</p>
                    <div className="mb-2 h-1.5 w-full rounded-full bg-[#e2e8f0]">
                      <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-[#5768fd] to-[#10b981]" />
                    </div>
                    <p className="font-mono text-[10px] text-[#007a55]">✓ Synced in 0.4s</p>
                  </div>

                  <div className="mt-7 flex items-center justify-center gap-1 border-t border-[#e2e8f0] pt-3">
                    <span className="h-1 w-1 rounded-full bg-[#5768fd]" />
                    <span className="font-mono text-[8px] text-[#64748b]">HIPAA Compliant</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="mb-2 text-[30px] font-semibold leading-[1.2] tracking-[-0.6px] text-[#040523] md:text-[32px]">
              AI captures the words; you capture the intent.
            </h3>
            <p className="text-[14px] leading-5 text-[#64748b]">
              Context-aware annotations let you add clinical insights without breaking your workflow.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
