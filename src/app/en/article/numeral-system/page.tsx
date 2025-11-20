import React from "react";
import Image from "next/image";
import Container from "@/src/components/common/container";
import { ARTICLES_002_SS_METALANG } from "@/src/lib/constants/article/sanoq-sistemasi";
import { SEO } from "@/src/lib/utils/generate-metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
    const lang = "en";
    const url = ARTICLES_002_SS_METALANG[lang] as string;

    const title = "Numeral system — Overview, History, and Types";
    const description =
        "An in-depth article about numeral systems, their history, different types, and how numbers are represented across cultures, mathematics, and computing.";
    const keywords = [
        "numeral system",
        "number system",
        "Hindu-Arabic numerals",
        "history of numerals",
        "positional notation",
        "binary system",
        "decimal system",
        "Roman numerals",
        "Maya numerals",
        "mathematics",
        "number representation",
        "computing numeral systems",
    ].join(", ");

    return SEO({ title, description, url, keywords, alterLangs: ARTICLES_002_SS_METALANG, lang, pageType: "article" });
}

const NumeralSystem = () => {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg">
                    <header>
                        <h1 >Numeral system</h1>
                    </header>

                    <section>
                        <h2 className="hidden">Numeral system</h2>
                        <p>
                            A numeral system is a writing system for expressing numbers; that is, a mathematical notation for representing numbers of a given set,
                            using digits or other symbols in a consistent manner.
                        </p>
                        <p>
                            The same sequence of symbols may represent different numbers in different numeral systems. For example,{" "}
                            <code className="[font-family:'Times_New_Roman',serif] px-1 py-0.5 rounded">"11"</code> represents the number eleven in the decimal or
                            base-10 numeral system (today, the most common system globally), the number three in the binary or base-2 numeral system (used in modern
                            computers), and the number two in the unary numeral system (used in tallying scores).
                        </p>
                        <p>
                            The number the numeral represents is called its <strong>value</strong>. Additionally, not all number systems can represent the same set
                            of numbers; for example, Roman, Greek, and Egyptian numerals don't have a representation of the number zero.
                        </p>
                        <p>Ideally, a numeral system will:</p>
                        <ul>
                            <li>Represent a useful set of numbers (e.g. all integers, or rational numbers)</li>
                            <li>Give every number represented a unique representation (or at least a standard representation)</li>
                            <li>Reflect the algebraic and arithmetic structure of the numbers.</li>
                        </ul>
                        <p>
                            For example, the usual decimal representation gives every nonzero natural number a unique representation as a finite sequence of digits,
                            beginning with a non-zero digit.
                        </p>
                        <p>
                            Numeral systems are sometimes called <em>number systems</em>, but that name is ambiguous, as it could refer to different systems of
                            numbers, such as the system of real numbers, the system of complex numbers, various hypercomplex number systems, the system of p-adic
                            numbers, etc. Such systems are, however, not the topic of this article.
                        </p>
                    </section>

                    <section>
                        <h2>History</h2>
                        <p>
                            According to scholars, early numeral systems are believed to have varied across civilizations, with the Babylonians using a base-60
                            system, the Egyptians developing hieroglyphic numerals, and the Chinese employing rod numerals. The Mayans independently created a
                            vigesimal (base-20) system that included a symbol for zero.
                        </p>
                        <Image
                            src="/images/historial_numeric_system.png"
                            className="dark:bg-slate-400 mb-4 float-right ml-4 rounded-lg p-4"
                            alt="maya"
                            width={360}
                            height={120}
                        />
                        <p>
                            Indian mathematicians, such as <strong>Brahmagupta</strong> in the 7th century, played a crucial role in formalizing arithmetic rules
                            and the concept of zero, which was later refined by scholars like <strong>Al-Khwarizmi</strong> in the Islamic world. As these numeral
                            systems evolved, the efficiency of positional notation and the inclusion of zero helped shape modern numerical representation,
                            influencing global commerce, science, and technology.
                        </p>
                        <p>
                            The first true written positional numeral system is considered to be the
                            <strong> Hindu–Arabic numeral system</strong>. This system was established by the 7th century in India
                            <sup className="text-gray-400">[1]</sup>, but was not yet in its modern form because the use of the digit zero had not yet been widely
                            accepted. Instead of a zero sometimes the digits were marked with dots to indicate their significance, or a space was used as a
                            placeholder. The first widely acknowledged use of zero was in <strong>876</strong>
                            <sup className="text-gray-400">[2]</sup>. The original numerals were very similar to the modern ones, even down to the glyphs used to
                            represent digits<sup className="text-gray-400">[1]</sup>.
                        </p>
                        <p>
                            By the 13th century, <strong>Western Arabic numerals</strong> were accepted in European mathematical circles (<strong>Fibonacci</strong>{" "}
                            used them in his <em>Liber Abaci</em>). Initially met with resistance, Hindu–Arabic numerals gained wider acceptance in Europe due to
                            their efficiency in arithmetic operations, particularly in banking and trade.
                        </p>
                        <p>
                            The invention of the printing press in the 15th century helped standardize their use, as printed mathematical texts favored this system
                            over Roman numerals. They began to enter common use in the 15th century<sup className="text-gray-400">[3]</sup>. By the end of the 20th
                            century virtually all non-computerized calculations in the world were done with Arabic numerals, which have replaced native numeral
                            systems in most cultures.
                        </p>
                        <p>
                            By the 17th century, the system had become dominant in scientific works, influencing mathematical advancements by figures like{" "}
                            <strong>Isaac Newton</strong> and <strong>René Descartes</strong>. In the 19th and 20th centuries, the widespread adoption of Arabic
                            numerals facilitated global finance, engineering, and technological developments, forming the foundation for modern computing and
                            digital data representation.
                        </p>
                    </section>

                    <section>
                        <h2>Other historical numeral systems using digits</h2>
                        <Image
                            src="/images/maya.png"
                            className="dark:bg-slate-400 mb-4 float-right ml-4 p-4 border rounded-lg"
                            alt="maya"
                            width={160}
                            height={120}
                        />
                        <p>
                            The exact age of the <strong>Maya numerals</strong> is unclear, but it is possible that it is older than the Hindu–Arabic system. The
                            system was <em>vigesimal</em> (base 20), so it has twenty digits. The Mayas used a shell symbol to represent zero. Numerals were written
                            vertically, with the ones place at the bottom. The Mayas had no equivalent of the modern decimal separator, so their system could not
                            represent fractions.
                        </p>
                        <p>
                            The <strong>Thai numeral system</strong> is identical to the Hindu–Arabic numeral system except for the symbols used to represent
                            digits. The use of these digits is less common in Thailand than it once was, but they are still used alongside Arabic numerals.
                            <sup className="text-gray-400">[4]</sup>
                        </p>
                        <Image src="/images/rod-table.png" className="mb-4 float-left mr-8 dark:opacity-60 border rounded-lg" alt="rods" width={500} height={300} />
                        <p>
                            The <strong>rod numerals</strong>, the written forms of counting rods once used by Chinese and Japanese mathematicians, are a decimal
                            positional system used for performing decimal calculations. Rods were placed on a counting board and slid forwards or backwards to
                            change the decimal place.
                        </p>
                        <p>
                            The <em>Sūnzĭ Suànjīng</em>, a mathematical treatise dated to between the 3rd and 5th centuries AD, provides detailed instructions for
                            the system, which is thought to have been in use since at least the 4th century BC.
                            <sup className="text-gray-400">[5]</sup> Zero was not initially treated as a number, but as a vacant position.
                            <sup className="text-gray-400">[6]</sup> Later sources introduced conventions for the expression of zero and negative numbers.
                        </p>
                        <p>
                            The use of a round symbol <code className="px-1 py-0.5 rounded dark:bg-background">〇</code> for zero is first attested in the{" "}
                            <em>Mathematical Treatise in Nine Sections</em> of 1247 AD.
                            <sup className="text-gray-400">[7]</sup> The origin of this symbol is unknown; it may have been produced by modifying a square symbol
                            <sup className="text-gray-400">[8]</sup>. The <strong>Suzhou numerals</strong>, a descendant of rod numerals, are still used today for
                            some commercial purposes.
                        </p>
                    </section>

                    <section>
                        <h2>Main numeral systems</h2>
                        <p>
                            The most commonly used system of numerals is decimal. Indian mathematicians are credited with developing the integer version, the
                            Hindu–Arabic numeral system.<sup className="text-gray-400">[8]</sup> Aryabhata of Kusumapura developed the place-value notation in the
                            5th century and a century later Brahmagupta introduced the symbol for zero. The system slowly spread to other surrounding regions like
                            Arabia due to their commercial and military activities with India. Middle-Eastern mathematicians extended the system to include negative
                            powers of 10 (fractions), as recorded in a treatise by Syrian mathematician Abu'l-Hasan al-Uqlidisi in 952–953, and the decimal point
                            notation was introduced by Sind ibn Ali, who also wrote the earliest treatise on Arabic numerals. The Hindu–Arabic numeral system then
                            spread to Europe due to merchants trading, and the digits used in Europe are called Arabic numerals, as they learned them from the
                            Arabs.
                        </p>
                        <p>
                            The simplest numeral system is the unary numeral system, in which every natural number is represented by a corresponding number of
                            symbols. If the symbol / is chosen, for example, then the number seven would be represented by ///////. Tally marks represent one such
                            system still in common use. The unary system is only useful for small numbers, although it plays an important role in theoretical
                            computer science. Elias gamma coding, which is commonly used in data compression, expresses arbitrary-sized numbers by using unary to
                            indicate the length of a binary numeral.
                        </p>
                        <p>
                            The unary notation can be abbreviated by introducing different symbols for certain new values. Very commonly, these values are powers of
                            10; so for instance, if / stands for one, − for ten and + for 100, then the number 304 can be compactly represented as +++ //// and the
                            number 123 as + − − /// without any need for zero. This is called sign-value notation. The ancient Egyptian numeral system was of this
                            type, and the Roman numeral system was a modification of this idea.
                        </p>
                        <p>
                            More useful still are systems which employ special abbreviations for repetitions of symbols; for example, using the first nine letters
                            of the alphabet for these abbreviations, with A standing for "one occurrence", B "two occurrences", and so on, one could then write C+
                            D/ for the number 304 (the number of these abbreviations is sometimes called the base of the system). This system is used when writing
                            Chinese numerals and other East Asian numerals based on Chinese. The number system of the English language is of this type ("three
                            hundred [and] four"), as are those of other spoken languages, regardless of what written systems they have adopted. However, many
                            languages use mixtures of bases, and other features, for instance 79 in French is <em>soixante dix-neuf</em> (60 + 10 + 9) and in Welsh
                            is <em>pedwar ar bymtheg a thrigain</em> (4 + (5 + 10) + (3 × 20)) or (somewhat archaic) <em>pedwar ugain namyn un</em> (4 × 20 − 1). In
                            English, one could say "four score less one", as in the famous Gettysburg Address representing "87 years ago" as "four score and seven
                            years ago".
                        </p>
                        <p>
                            More elegant is a positional system, also known as place-value notation. The positional systems are classified by their base or radix,
                            which is the number of symbols called digits used by the system. In base 10, ten different digits 0, ..., 9 are used and the position of
                            a digit is used to signify the power of ten that the digit is to be multiplied with, as in 304 = 3×100 + 0×10 + 4×1 or more precisely
                            3×10² + 0×10¹ + 4×10⁰. Zero, which is not needed in the other systems, is of crucial importance here, in order to be able to "skip" a
                            power. The Hindu–Arabic numeral system, which originated in India and is now used throughout the world, is a positional base 10 system.
                        </p>
                        <p>
                            Arithmetic is much easier in positional systems than in the earlier additive ones; furthermore, additive systems need a large number of
                            different symbols for the different powers of 10; a positional system needs only ten different symbols (assuming that it uses base 10).
                            <sup className="text-gray-400">[10]</sup>
                        </p>
                        <p>
                            The positional decimal system is presently universally used in human writing. The base 1000 is also used (albeit not universally), by
                            grouping the digits and considering a sequence of three decimal digits as a single digit. This is the meaning of the common notation
                            1,000,234,567 used for very large numbers.
                        </p>
                        <p>
                            In computers, the main numeral systems are based on the positional system in base 2 (binary numeral system), with two binary digits, 0
                            and 1. Positional systems obtained by grouping binary digits by three (octal numeral system) or four (hexadecimal numeral system) are
                            commonly used. For very large integers, bases 2³² or 2⁶⁴ (grouping binary digits by 32 or 64, the length of the machine word) are used,
                            as, for example, in GMP.
                        </p>
                        <p>
                            In certain biological systems, the unary coding system is employed. Unary numerals used in the neural circuits responsible for birdsong
                            production.<sup className="text-gray-400">[11]</sup> The nucleus in the brain of the songbirds that plays a part in both the learning
                            and the production of bird song is the HVC (high vocal center). The command signals for different notes in the birdsong emanate from
                            different points in the HVC. This coding works as space coding which is an efficient strategy for biological circuits due to its
                            inherent simplicity and robustness.
                        </p>
                        <p>
                            The numerals used when writing numbers with digits or symbols can be divided into two types that might be called the arithmetic numerals
                            (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) and the geometric numerals (1, 10, 100, 1000, 10000 ...), respectively. The sign-value systems use only
                            the geometric numerals and the positional systems use only the arithmetic numerals. A sign-value system does not need arithmetic
                            numerals because they are made by repetition (except for the Ionic system), and a positional system does not need geometric numerals
                            because they are made by position. However, the spoken language uses both arithmetic and geometric numerals.
                        </p>
                        <p>
                            In some areas of computer science, a modified base <em>k</em> positional system is used, called bijective numeration, with digits 1, 2,
                            ..., <em>k</em> (<em>k</em> ≥ 1), and zero being represented by an empty string. This establishes a bijection between the set of all
                            such digit-strings and the set of non-negative integers, avoiding the non-uniqueness caused by leading zeros. Bijective base-
                            <em>k</em> numeration is also called <em>k</em>-adic notation, not to be confused with p-adic numbers. Bijective base 1 is the same as
                            unary.
                        </p>
                    </section>

                    <section>
                        <h2>Positional systems in detail</h2>
                        <p>
                            In a positional base <em>b</em> numeral system (with <em>b</em> a natural number greater than 1 known as the radix or base of the
                            system), <em>b</em> basic symbols (or digits) corresponding to the first <em>b</em> natural numbers including zero are used. To generate
                            the rest of the numerals, the position of the symbol in the figure is used. The symbol in the last position has its own value, and as it
                            moves to the left its value is multiplied by <em>b</em>.
                        </p>
                        <p>
                            For example, in the <strong>decimal</strong> system (base 10), the numeral 4327 means (4×10³) + (3×10²) + (2×10¹) + (7×10⁰), noting that
                            10⁰ = 1.
                        </p>
                        <p>
                            In general, if <em>b</em> is the base, one writes a number in the numeral system of base <em>b</em> by expressing it in the form:
                            <br />
                            <code className="[font-family:'Times_New_Roman',serif] p-1 rounded inline-block">aₙbⁿ + aₙ₋₁bⁿ⁻¹ + aₙ₋₂bⁿ⁻² + ... + a₀b⁰</code> and
                            writing the enumerated digits <code className="[font-family:'Times_New_Roman',serif] px-1">aₙ aₙ₋₁ ... a₀</code> in descending order.
                            The digits are natural numbers between 0 and <em>b – 1</em>, inclusive.
                        </p>
                        <p>
                            If a text (such as this one) discusses multiple bases, and if ambiguity exists, the base (itself represented in base 10) is added in
                            subscript to the right of the number, like this:{" "}
                            <code className="[font-family:'Times_New_Roman',serif] px-1">
                                number<sub>base</sub>
                            </code>
                            . Unless specified by context, numbers without subscript are considered to be decimal.
                        </p>
                        <p>
                            By using a dot to divide the digits into two groups, one can also write fractions in the positional system. For example, the base 2
                            numeral <code className="[font-family:'Times_New_Roman',serif] px-1">10.11</code> denotes 1×2¹ + 0×2⁰ + 1×2⁻¹ + 1×2⁻² = 2.75.
                        </p>
                        <p>
                            In general, numbers in the base <em>b</em> system are of the form:
                            <br />
                            <Image src="/images/formula_n1.png" className="dark:bg-slate-400 rounded-lg" alt="f1" width={373} height={50} />
                        </p>
                        <p>
                            The numbers bᵏ and b⁻ᵏ are the <strong>weights</strong> of the corresponding digits. The position <em>k</em> is the{" "}
                            <strong>logarithm</strong> of the corresponding weight <em>w</em>, that is{" "}
                            <Image src="/images/formula_n2.png" className="dark:bg-slate-400 rounded-sm inline" alt="f2" width={141} height={23} />. The highest
                            used position is close to the <strong>order of magnitude</strong> of the number.
                        </p>
                        <p>
                            The number of tally marks required in the unary numeral system for describing the weight would have been <em>w</em>. In the positional
                            system, the number of digits required to describe it is only{" "}
                            <Image src="/images/formula_n3.png" className="dark:bg-slate-400 rounded-sm inline" alt="f3" width={131} height={19} />, for{" "}
                            <em>k ≥ 0</em>. For example, to describe the weight 1000 then four digits are needed because{" "}
                            <code className="[font-family:'Times_New_Roman',serif] px-1">
                                log<sub>10</sub> 1000 + 1 = 3 + 1
                            </code>
                            . The number of digits required to <em>describe the position</em> is{" "}
                            <Image src="/images/formula_n4.png" className="dark:bg-slate-400 rounded-sm inline" alt="f4" width={192} height={19} />
                            (in positions 1, 10, 100,... only for simplicity in the decimal example).
                        </p>
                        <Image src="/images/table_n4.png" className="dark:bg-slate-400 rounded-lg mb-2 inline" alt="t4" width={474} height={121} />
                        <p>
                            A number has a terminating or repeating expansion if and only if it is rational; this does not depend on the base. A number that
                            terminates in one base may repeat in another (thus 0.3₁₀ = 0.0100110011001...₂). An irrational number stays aperiodic (with an infinite
                            number of non-repeating digits) in all integral bases. Thus, for example in base 2, π = 3.1415926...₁₀ can be written as the aperiodic
                            11.001001000011111...₂.
                        </p>
                        <p>
                            Putting overscores,{" "}
                            <code>
                                <span className="overline">n</span>
                            </code>
                            , or dots, <code>ṅ</code>, above the common digits is a convention used to represent repeating rational expansions. Thus:
                            <br />
                            <code className="[font-family:'Times_New_Roman',serif] px-2 block mt-2">
                                14/11 = 1.272727272727... = 1.<span className="overline">27</span>
                            </code>
                            <code className="[font-family:'Times_New_Roman',serif] px-2 block mt-1">
                                321.3217878787878... = 321.321<span className="overline">78</span>
                            </code>
                        </p>
                        <p>
                            If b = p is a prime number, one can define base-<em>p</em> numerals whose expansion to the left never stops; these are called the{" "}
                            <strong>p-adic numbers</strong>.
                        </p>
                        <p>
                            It is also possible to define a variation of base <em>b</em> in which digits may be positive or negative; this is called a{" "}
                            <strong>signed-digit representation</strong>.
                        </p>
                    </section>

                    <section>
                        <h2>Generalized variable-length integers</h2>

                        <p>
                            More general is using a mixed radix notation (here written little-endian) like{" "}
                            <code className="[font-family:'Times_New_Roman',serif] px-1">a₀a₁a₂</code> for{" "}
                            <code className="[font-family:'Times_New_Roman',serif] px-1">a₀ + a₁·b₁ + a₂·b₁·b₂</code>, etc.
                        </p>

                        <p>
                            This is used in <strong>Punycode</strong>, one aspect of which is the representation of a sequence of non-negative integers of arbitrary
                            size in the form of a sequence without delimiters, using "digits" from a collection of 36: <code>a–z</code> and <code>0–9</code>,
                            representing values 0–25 and 26–35 respectively.
                        </p>

                        <p>
                            There are also so-called threshold values <code>t₀, t₁, ...</code> which are fixed for every position in the number. A digit{" "}
                            <code>aᵢ</code> (in a given position in the number) that is lower than its corresponding threshold value <code>tᵢ</code> means that it
                            is the most-significant digit. Hence, in the string, this marks the end of the number, and the next symbol (if present) is the
                            least-significant digit of the next number.
                        </p>

                        <p>
                            For example, if the threshold value for the first digit is <code>b = 1</code>, then <code>a = 0</code> marks the end of the number (it
                            has just one digit). So, in numbers of more than one digit, the first-digit range is only <code>b–9</code> (i.e., 1–35), meaning the
                            weight <code>b₁</code> is 35 instead of 36. More generally, if <code>tₙ</code> is the threshold for the n-th digit, it is easy to show
                            that:
                            <br />
                            <code className="[font-family:'Times_New_Roman',serif] px-2 block mt-2">bₙ₊₁ = 36 − tₙ</code>
                        </p>

                        <p>
                            Suppose the threshold values for the second and third digits are <code>c = 2</code>. Then the second-digit range is <code>a–b</code>{" "}
                            (i.e., 0–1) if it is the most significant digit, and <code>c–9</code> (i.e., 2–35) if there is a third digit. Generally, for any{" "}
                            <em>n</em>, the weight of the (n + 1)-th digit is the weight of the previous one multiplied by <code>36 − tₙ</code>.
                        </p>

                        <p>
                            For example:
                            <br />
                            <code className="[font-family:'Times_New_Roman',serif] px-2 block">Weight of 2nd symbol = 36 − t₀ = 35</code>
                            <br />
                            <code className="[font-family:'Times_New_Roman',serif] px-2 block">Weight of 3rd symbol = 35 × (36 − t₁) = 35 × 34 = 1190</code>
                        </p>

                        <p>
                            So we have the following sequence of numbers with at most 3 digits:
                            <br />
                            <code className="[font-family:'Times_New_Roman',serif] px-2 block tracking-tight">
                                a (0), ba (1), ca (2), ..., 9a (35), bb (36), cb (37), ..., 9b (70), bca (71), ..., 99a (1260), bcb (1261), ..., 99b (2450)
                            </code>
                        </p>

                        <p>
                            Unlike a regular n-based numeral system, there are numbers like <code>9b</code> where both <code>9</code> and <code>b</code> each
                            represent 35. Yet the representation is unique because <code>ac</code> and <code>aca</code> are not allowed — the first <code>a</code>{" "}
                            would terminate each of these numbers.
                        </p>

                        <p>
                            The flexibility in choosing threshold values allows optimization for number of digits depending on the frequency of occurrence of
                            numbers of various sizes.
                        </p>

                        <p>
                            The case with all threshold values equal to 1 corresponds to <strong>bijective numeration</strong>, where the zeros correspond to
                            separators of numbers with digits which are non-zero.
                        </p>
                        <div className="float-right">© wikipedia, 2025</div>
                        <br />
                    </section>

                    <hr />
                    <h2 >References</h2>
                    <ol>
                        <li>
                            O'Connor, J. J. and Robertson, E. F. <em>Arabic Numerals</em>. January 2001.
                        </li>
                        <li>
                            Bill Casselman. "All for Nought". <em>Feature Column</em>. AMS. February 2007.
                        </li>
                        <li>
                            Bradley, Jeremy. "How Arabic Numbers Were Invented". <em>theclassroom.com</em>.
                        </li>
                        <li>
                            "Wissanu rejects dumping Thai numerals". <em>Bangkok Post</em>. 31 May 2022.
                        </li>
                        <li>O'Connor, John J.; Robertson, Edmund F. (2004). "Chinese numerals". University of St Andrews.</li>
                        <li>
                            Shen Kuo et al. (1999). <em>The Nine Chapters on the Mathematical Art</em>. Oxford University Press.
                        </li>
                        <li>
                            "Mathematics in the Near and Far East". <em>grmath4.phpnet.us</em>.
                        </li>
                        <li>
                            Martzloff, Jean-Claude (2007). <em>A History of Chinese Mathematics</em>.
                        </li>
                        <li>
                            David Eugene Smith; Louis Charles Karpinski (1911). <em>The Hindu–Arabic numerals</em>.
                        </li>
                        <li>
                            Chowdhury, Arnab. <em>Design of an Efficient Multiplier using DBNS</em>. GIAP Journals.
                        </li>
                        <li>
                            Fiete, I. R.; Seung, H. S. (2007). "Neural network models of birdsong..." in <em>New Encyclopedia of Neuroscience</em>.
                        </li>
                    </ol>

                    <h2>Sources</h2>
                    <ul>
                        <li>
                            Georges Ifrah. <em>The Universal History of Numbers</em>. Wiley, 1999.
                        </li>
                        <li>
                            D. Knuth. <em>The Art of Computer Programming</em>. Addison–Wesley, 3rd Ed.
                        </li>
                        <li>
                            A.L. Kroeber. <em>Handbook of the Indians of California</em>. Smithsonian Institution.
                        </li>
                        <li>
                            J.P. Mallory; D.Q. Adams. <em>Encyclopedia of Indo-European Culture</em>.
                        </li>
                        <li>
                            Hans J. Nissen et al. (1993). <em>Archaic Bookkeeping</em>. University of Chicago Press.
                        </li>
                        <li>
                            Schmandt-Besserat, Denise (1996). <em>How Writing Came About</em>. University of Texas Press.
                        </li>
                        <li>
                            Zaslavsky, Claudia (1999). <em>Africa Counts</em>. Chicago Review Press.
                        </li>
                    </ul>
                </Container>
            </article>
        </main>
    );
};

export default NumeralSystem;
