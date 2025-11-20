import Container from "@/src/components/common/container";
import { ARTICLES_001_PVNSS_METALANG } from "@/src/lib/constants/article/pozitsion-va-nopozitsion-sanoq-sistemalari";
import { SEO } from "@/src/lib/utils/generate-metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
    const url = ARTICLES_001_PVNSS_METALANG["en"] as string;
    const title = "Positional vs Non-Positional Numeral Systems";
    const description = "This article explains numeral systems with simple, practical examples.";
    const keywords = ["numeral system", "number system", "positional numeral system", "non-positional numeral system", "difference between numeral systems"];

    return SEO({ title, description, url, keywords, alterLangs: ARTICLES_001_PVNSS_METALANG, lang: "en", pageType: "article" });
}

export default function ArticlePositionalNonpositional() {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg">
                    <header>
                        <h1>Positional vs Non-Positional Numeral Systems</h1>
                        <p>
                            This article explains the concept of numeral systems with simple, practical examples. We focus on two major categories:{" "}
                            <strong>positional</strong> (a digit’s value depends on its position) and <strong>non-positional</strong> (a digit’s value is fixed)
                            systems.
                        </p>
                    </header>

                    <section>
                        <h2>What is a numeral system?</h2>
                        <p>
                            A numeral system is a set of <em>rules for representing and writing numbers</em>. Every system has a <strong>base (radix)</strong>{" "}
                            and a <strong>set of digits</strong>. For example, in the decimal system the base is 10 and the digits are 0–9.
                        </p>
                    </section>

                    <section>
                        <h2>Positional vs non-positional</h2>
                        <p>
                            In <strong>positional</strong> systems, a digit’s value depends on its <em>position</em>. For instance, in 507 the digit 5 denotes
                            five hundreds, 0 denotes zero tens, and 7 denotes seven ones. In <strong>non-positional</strong> systems, a digit’s value does not
                            change with position; the number’s value is found via a <em>sum</em> of symbols or a <em>rule-based combination</em>.
                        </p>
                    </section>

                    <section>
                        <h2>Non-positional systems</h2>
                        <ul>
                            <li>
                                <strong>Tally marks:</strong> <code>||||</code> = 4, <code>|||| |||</code> = 7. Each stroke is always 1; position is irrelevant.
                            </li>
                            <li>
                                <strong>Roman numerals:</strong> <code>I=1</code>, <code>V=5</code>, <code>X=10</code>, <code>L=50</code>, <code>C=100</code>,{" "}
                                <code>D=500</code>, <code>M=1000</code>. Numbers are formed mostly by addition (and sometimes subtraction). For example,{" "}
                                <code>VIII = 5+3 = 8</code>, <code>IX = 10−1 = 9</code>, <code>XL = 50−10 = 40</code>.
                            </li>
                            <li>
                                <strong>Ancient Egyptian numerals:</strong> Numbers are written as repeated sums of unit, ten, hundred symbols, etc. (position
                                is not significant).
                            </li>
                        </ul>
                        <p>
                            In non-positional systems, <em>writing large numbers</em> requires many symbols, and <em>arithmetic operations</em> (especially
                            multiplication/division) become cumbersome.
                        </p>
                    </section>

                    <section>
                        <h2>Positional systems</h2>
                        <p>
                            In a positional system, a number can be interpreted as a <em>polynomial</em> in the base:
                        </p>
                        <pre>
                            <code>{`(a_n a_{n-1} ... a_1 a_0)_b = a_n*b^n + a_{n-1}*b^{n-1} + ... + a_1*b + a_0\nCondition: 0 \u2264 a_i < b`}</code>
                        </pre>
                        <p>
                            Here <strong>b</strong> is the base (radix); for example, decimal has <strong>b=10</strong>, binary has <strong>b=2</strong>, and
                            hexadecimal has <strong>b=16</strong>. The digit <strong>0</strong> is crucial in positional systems: it serves as a placeholder and
                            denotes the absence of value in a position.
                        </p>

                        <strong>Common positional systems</strong>
                        <ul>
                            <li>
                                <strong>Decimal (b=10):</strong> the standard for everyday life, finance, and measurement.
                            </li>
                            <li>
                                <strong>Binary (b=2):</strong> the basis of digital logic (0/1) and computer hardware.
                            </li>
                            <li>
                                <strong>Octal (b=8) and Hexadecimal (b=16):</strong> compact representations of bit groups; convenient in programming.
                            </li>
                            <li>
                                <strong>Base-6, base-5, base-20, base-60:</strong> appear across cultures and history (e.g., base-60 for time and angles).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Why are positional systems convenient?</h2>
                        <ol>
                            <li>
                                <strong>Compact notation:</strong> The same value can be written with fewer symbols (digits).
                            </li>
                            <li>
                                <strong>Algorithmic arithmetic:</strong> Stable, repeatable algorithms exist for addition, subtraction, multiplication, and
                                division.
                            </li>
                            <li>
                                <strong>Scalability across bases:</strong> Core rules (place value, powers) generalize cleanly when the base changes.
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2>Why is arithmetic harder in non-positional systems?</h2>
                        <ul>
                            <li>
                                <strong>Additive construction:</strong> Digits accumulate via addition; multiplication reduces to repeated addition, yielding
                                bulky notations.
                            </li>
                            <li>
                                <strong>Subtractive rules:</strong> Cases like <code>IV</code>, <code>IX</code> in Roman numerals complicate straightforward
                                algorithms.
                            </li>
                            <li>
                                <strong>Zero is absent or rare:</strong> Without a placeholder, it’s harder to generalize algorithms and structure.
                            </li>
                        </ul>
                        <strong>Practical comparison</strong>
                        <table>
                            <thead>
                                <tr>
                                    <th>Aspect</th>
                                    <th>Positional</th>
                                    <th>Non-positional</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Digit value</td>
                                    <td>
                                        Depends on position (<em>place value</em>)
                                    </td>
                                    <td>Fixed, independent of position</td>
                                </tr>
                                <tr>
                                    <td>Digit 0</td>
                                    <td>Central role</td>
                                    <td>Usually absent or rarely used</td>
                                </tr>
                                <tr>
                                    <td>Arithmetic</td>
                                    <td>Algorithmic, simpler</td>
                                    <td>Complex, governed by rule sets</td>
                                </tr>
                                <tr>
                                    <td>Compactness</td>
                                    <td>High</td>
                                    <td>Low</td>
                                </tr>
                                <tr>
                                    <td>Usage</td>
                                    <td>Everyday, scientific, computing</td>
                                    <td>Historical, ceremonial, special notation</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Let’s see a few examples:</p>
                        <ul>
                            <li>
                                <strong>Roman → decimal:</strong> MCMLXXXIV = 1000 + (1000−100) + 50 + 10 + 10 + 10 + (5−1) = 1984.
                            </li>
                            <li>
                                <strong>Binary → decimal:</strong> 1100101<sub>2</sub> = 64 + 32 + 4 + 1 = 101<sub>10</sub>.
                            </li>
                            <li>
                                <strong>Decimal → hexadecimal:</strong> 255<sub>10</sub> → (FF)<sub>16</sub>.
                            </li>
                            <li>
                                <strong>Decimal → binary (fraction):</strong> 0.1<sub>10</sub> ≈ 0.0001100110011…<sub>2</sub> (repeating).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Bonus: Common pitfalls</h2>
                        <ul>
                            <li>
                                <strong>Using digits outside the base:</strong> e.g., digits <b>2</b> or <b>3</b> cannot appear in binary.
                            </li>
                            <li>
                                <strong>Stopping fractional conversion too early:</strong> Choose a step limit and precision target up front to control error.
                            </li>
                            <li>
                                <strong>Overusing subtractive notation in Roman numerals:</strong> forms like <b>IL</b> (49) are not standard; the correct form
                                is <b>XLIX</b>.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <p>
                            While non-positional systems are historically and culturally fascinating, modern science and technology overwhelmingly rely on{" "}
                            <strong>positional</strong> systems. Their strengths are place value, the digit 0, and algorithmic arithmetic. Knowing conversion
                            methods simplifies everyday work in programming and engineering.
                        </p>
                    </section>

                    <footer>
                        <p>Author: Najmiddin Nazirov</p>
                    </footer>
                </Container>
            </article>
        </main>
    );
}
