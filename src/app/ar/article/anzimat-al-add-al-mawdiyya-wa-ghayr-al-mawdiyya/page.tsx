import Container from "@/src/components/common/container";
import { ARTICLES_001_PVNSS_METALANG } from "@/src/lib/constants/article/pozitsion-va-nopozitsion-sanoq-sistemalari";
import { SEO } from "@/src/lib/utils/generate-metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
    const url = ARTICLES_001_PVNSS_METALANG["ar"] as string;
    const title = "أنظمة العد الموضعية وغير الموضعية";
    const description = "تشرح هذه المقالة مفهوم أنظمة العد بأسلوب مبسّط مع أمثلة عملية.";
    const keywords = ["نظام عد", "نظام عد موضعي", "نظام عد غير موضعي", "الأرقام الرومانية", "الفرق بين أنظمة العد"];

    return SEO({ title, description, url, keywords, alterLangs: ARTICLES_001_PVNSS_METALANG, lang: "ar", pageType: "article" });
}

export default function MaqolaPozitsionNopozitsion_AR() {
    return (
        <main className="flex" dir="rtl" lang="ar">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg">
                    <header>
                        <h1>أنظمة العد الموضعية وغير الموضعية</h1>
                        <p>
                            تشرح هذه المقالة مفهوم أنظمة العد بأسلوب مبسّط مع أمثلة عملية. ويتركّز الاهتمام على فئتين رئيسيتين:
                            <strong> موضعية</strong> (قيمة الرقم تعتمد على موضعه) و<strong> غير موضعية</strong> (قيمة الرقم ثابتة).
                        </p>
                    </header>

                    <section>
                        <h2>ما هو نظام العد؟</h2>
                        <p>
                            نظام العد هو <em>مجموعة القواعد لتمثيل الأعداد وكتابتها</em>. لكل نظام <strong>أساس</strong> و<strong> مجموعة من الأرقام</strong>.
                            مثلًا، في النظام العشري يكون الأساس 10 ومجموعة الأرقام من 0 إلى 9.
                        </p>
                    </section>

                    <section>
                        <h2>الفرق بين الموضعي وغير الموضعي</h2>
                        <p>
                            في <strong>الأنظمة الموضعية</strong> تعتمد قيمة الرقم على <em>موضعه</em>. مثلًا في العدد 507 تشير 5 إلى مئات، و0 إلى عشرات، و7 إلى
                            آحاد. أمّا في <strong>الأنظمة غير الموضعية</strong> فلا تتغيّر قيمة الرمز بتغيّر موضعه؛ تُحسَب قيمة العدد عبر
                            <em> مجموع قيم الرموز</em> أو <em>تركيباتٍ قاعدية</em>.
                        </p>
                    </section>

                    <section>
                        <h2>الأنظمة غير الموضعية</h2>
                        <ul>
                            <li>
                                <strong>ترميز العد بالخطوط (tally):</strong> <code>||||</code> = 4، <code>|||| |||</code> = 7. كل خط يساوي 1؛ الموضع غير ذي صلة.
                            </li>
                            <li>
                                <strong>الأرقام الرومانية:</strong> <code>I=1</code>، <code>V=5</code>، <code>X=10</code>، <code>L=50</code>، <code>C=100</code>
                                ، <code>D=500</code>، <code>M=1000</code>. تُركَّب الأعداد غالبًا بقواعد الجمع (وأحيانًا الطرح): مثلًا{" "}
                                <code>VIII = 5+3 = 8</code>، <code>IX = 10−1 = 9</code>، <code>XL = 50−10 = 40</code>.
                            </li>
                            <li>
                                <strong>الأرقام المصرية القديمة:</strong> تُكتب الأعداد بتكرار رموز الآحاد والعشرات والمئات… (الموضع غير مؤثّر).
                            </li>
                        </ul>
                        <p>
                            في الأنظمة غير الموضعية تتطلّب <em>كتابة الأعداد الكبيرة</em> رموزًا كثيرة، كما أن <em>العمليات الحسابية</em> (خصوصًا الضرب/القسمة)
                            أكثر تعقيدًا.
                        </p>
                    </section>

                    <section>
                        <h2>الأنظمة الموضعية</h2>
                        <p>
                            يُمثَّل العدد في النظام الموضعي على هيئة <em>متعدد حدود</em> كما يلي:
                        </p>
                        <pre>
                            <code>{`(a_n a_{n-1} ... a_1 a_0)_b = a_n*b^n + a_{n-1}*b^{n-1} + ... + a_1*b + a_0\nالشرط: 0 \u2264 a_i < b`}</code>
                        </pre>
                        <p>
                            حيث <strong>b</strong> هو <strong>أساس النظام</strong>؛ مثلًا: في العشري <strong>b=10</strong>، في الثنائي <strong>b=2</strong>، في
                            الست عشري <strong>b=16</strong>. والرقم <strong>0</strong> عنصر جوهري في الأنظمة الموضعية: يُستخدم رقمًا مكمّلًا ودالًّا على غياب
                            القيمة.
                        </p>

                        <strong>أنظمة موضعية شائعة</strong>
                        <ul>
                            <li>
                                <strong>العشري (b=10):</strong> المعيار في الحياة اليومية والمالية والقياس.
                            </li>
                            <li>
                                <strong>الثنائي (b=2):</strong> أساس منطق الحواسيب (0/1) والإلكترونيات الرقمية.
                            </li>
                            <li>
                                <strong>الثماني (b=8) والست عشري (b=16):</strong> لتمثيل مجموعات البِتّات بصورة مُكثّفة ومناسبة للبرمجة.
                            </li>
                            <li>
                                <strong>الخمسي (b=5) والسداسي (b=6) والعشريني (b=20) والستيني (b=60):</strong> تظهر في سياقات ثقافية وتاريخية مختلفة (مثل نظام
                                الوقت والزوايا الستيني).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>لماذا الأنظمة الموضعية عملية؟</h2>
                        <ol>
                            <li>
                                <strong>إيجازٌ عالٍ:</strong> تمثيل القيم ذاتها بعدد أقل من الرموز.
                            </li>
                            <li>
                                <strong>حسابٌ خوارزمي:</strong> خوارزميات مستقرة ومكرّرة للجمع والطرح والضرب والقسمة.
                            </li>
                            <li>
                                <strong>قابلية القياس:</strong> تبقى القواعد العامة (القيمة الموضعية والدرجات) صالحة مع تغيير الأساس.
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2>لماذا الحساب في الأنظمة غير الموضعية صعب؟</h2>
                        <ul>
                            <li>
                                <strong>البناء التجميعي:</strong> تُجمع الرموز تباعًا؛ الضرب تكرارُ جمعٍ، فتتعقّد الكتابة.
                            </li>
                            <li>
                                <strong>قواعد الطرح:</strong> مثل <code>IV</code> و<code>IX</code> في الرومانية لا تُبسّط الخوارزميات.
                            </li>
                            <li>
                                <strong>غياب الرقم 0 أو ندرته:</strong> لا يوجد “مكان فارغ” للتعبئة، ما يعيق التعميم.
                            </li>
                        </ul>

                        <strong>مقارنة عملية</strong>
                        <table>
                            <thead>
                                <tr>
                                    <th>المعيار</th>
                                    <th>موضعي</th>
                                    <th>غير موضعي</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>قيمة الرقم</td>
                                    <td>
                                        تعتمد على الموضع (<em>قيمة موضعية</em>)
                                    </td>
                                    <td>ثابتة مستقلة عن الموضع</td>
                                </tr>
                                <tr>
                                    <td>الرقم 0</td>
                                    <td>عنصر محوري</td>
                                    <td>غائب غالبًا أو نادر الاستخدام</td>
                                </tr>
                                <tr>
                                    <td>الحساب</td>
                                    <td>خوارزمي وأسهل</td>
                                    <td>معقّد ويعتمد على مجموعات قواعد</td>
                                </tr>
                                <tr>
                                    <td>الإيجاز</td>
                                    <td>عالٍ</td>
                                    <td>منخفض</td>
                                </tr>
                                <tr>
                                    <td>مجالات الاستخدام</td>
                                    <td>يومي، علمي، حاسوبي</td>
                                    <td>تاريخي، طقوسي، ترميز خاص</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>لنرَ بعض الأمثلة:</p>
                        <ul>
                            <li>
                                <strong>روماني → عشري:</strong> MCMLXXXIV = 1000 + (1000−100) + 50 + 10 + 10 + 10 + (5−1) = 1984.
                            </li>
                            <li>
                                <strong>ثنائي → عشري:</strong> 1100101<sub>2</sub> = 64 + 32 + 4 + 1 = 101<sub>10</sub>.
                            </li>
                            <li>
                                <strong>عشري → ست عشري:</strong> 255<sub>10</sub> → (FF)<sub>16</sub>.
                            </li>
                            <li>
                                <strong>عشري → ثنائي (كسر):</strong> 0.1<sub>10</sub> ≈ 0.0001100110011…<sub>2</sub> (دوري).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>إضافي: أخطاء شائعة</h2>
                        <ul>
                            <li>
                                <strong>استخدام رقم أكبر من الأساس:</strong> مثلًا لا يجوز استعمال <b>2</b> أو <b>3</b> في الثنائي.
                            </li>
                            <li>
                                <strong>إيقاف تحويل الكسور مبكرًا:</strong> لضبط الخطأ ينبغي تحديد عدد الخطوات والدقّة مسبقًا.
                            </li>
                            <li>
                                <strong>سوء استخدام قواعد الطرح في الرومانية:</strong> كتابة <b>IL</b> (لعدد 49) غير صحيحة قياسيًا؛ والصواب <b>XLIX</b>.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <p>
                            مع أنّ الأنظمة غير الموضعية مهمّة تاريخيًا وثقافيًا، تبقى <strong>الأنظمة الموضعية</strong> أَولى بالاستعمال في العلم والتقنية
                            اليوم. سرّ قوتها في <em>القيمة الموضعية</em> والرقم <strong>0</strong> و<em>الخوارزميات الحسابية</em>. كما أنّ إتقان طرق التحويل
                            يسهم في تبسيط العمل اليومي في البرمجة والهندسة.
                        </p>
                    </section>

                    <footer>
                        <p>المؤلف: Najmiddin Nazirov</p>
                    </footer>
                </Container>
            </article>
        </main>
    );
}
