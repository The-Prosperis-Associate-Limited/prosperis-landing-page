from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import Paragraph
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "prosperis-company-profile.pdf"

PAGE_W, PAGE_H = A4
BLUE = colors.HexColor("#2F6BF6")
DEEP_BLUE = colors.HexColor("#073FA7")
NAVY = colors.HexColor("#05265F")
INK = colors.HexColor("#111A2C")
SLATE = colors.HexColor("#536075")
LIME = colors.HexColor("#F2FF88")
PAPER = colors.HexColor("#F5F4EF")
WHITE = colors.white


def pstyle(name, **kwargs):
    defaults = {
        "fontName": "Helvetica",
        "fontSize": 10,
        "leading": 15,
        "textColor": SLATE,
        "alignment": TA_LEFT,
    }
    defaults.update(kwargs)
    return ParagraphStyle(name, **defaults)


BODY = pstyle("body", fontSize=10.2, leading=16.2)
BODY_LIGHT = pstyle("body-light", fontSize=10.2, leading=16.2, textColor=colors.HexColor("#D8E2F5"))
SMALL = pstyle("small", fontSize=8.2, leading=12.5)


def draw_paragraph(c, text, x, y_top, width, style=BODY):
    paragraph = Paragraph(text, style)
    _, height = paragraph.wrap(width, PAGE_H)
    paragraph.drawOn(c, x, y_top - height)
    return height


def label(c, text, x, y, color=BLUE):
    c.setFillColor(color)
    c.circle(x + 2.5, y + 2.5, 2.5, stroke=0, fill=1)
    c.setFont("Helvetica-Bold", 7.4)
    c.drawString(x + 11, y, text.upper())


def wordmark(c, x, y, inverse=False):
    fill = LIME if inverse else DEEP_BLUE
    text = NAVY if inverse else WHITE
    c.setFillColor(fill)
    c.roundRect(x, y, 31, 31, 8, fill=1, stroke=0)
    c.setFillColor(text)
    c.setFont("Times-Roman", 21)
    c.drawCentredString(x + 15.5, y + 7.6, "P")
    c.setFillColor(WHITE if inverse else NAVY)
    c.setFont("Helvetica-Bold", 9.2)
    c.drawString(x + 40, y + 16, "PROSPERIS")
    c.setFont("Helvetica", 4.8)
    c.drawString(x + 40, y + 8, "G R O U P")


def footer(c, page_number, inverse=False):
    color = colors.HexColor("#9BA9C4") if inverse else colors.HexColor("#8A909B")
    c.setFillColor(color)
    c.setFont("Helvetica", 6.6)
    c.drawString(18 * mm, 13 * mm, "PROSPERIS GROUP / COMPANY PROFILE / PREVIEW")
    c.drawRightString(PAGE_W - 18 * mm, 13 * mm, f"{page_number:02d}")


def title(c, text, x, y, size=36, color=INK, max_width=None):
    c.setFillColor(color)
    c.setFont("Times-Roman", size)
    if max_width and stringWidth(text, "Times-Roman", size) > max_width:
        words = text.split()
        lines = []
        line = ""
        for word in words:
            trial = f"{line} {word}".strip()
            if stringWidth(trial, "Times-Roman", size) <= max_width:
                line = trial
            else:
                lines.append(line)
                line = word
        lines.append(line)
        for i, item in enumerate(lines):
            c.drawString(x, y - i * size * 1.03, item)
        return len(lines) * size * 1.03
    c.drawString(x, y, text)
    return size


def page_one(c):
    c.setFillColor(DEEP_BLUE)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    for i in range(8):
        c.setStrokeColor(colors.Color(1, 1, 1, alpha=0.055))
        c.line(0, 90 + i * 76, PAGE_W, 90 + i * 76)
    for i in range(7):
        c.line(70 + i * 76, 0, 70 + i * 76, PAGE_H)

    c.setStrokeColor(colors.Color(1, 1, 1, alpha=0.16))
    c.setLineWidth(1)
    c.circle(PAGE_W + 5, PAGE_H * 0.56, 205, stroke=1, fill=0)
    c.circle(PAGE_W + 5, PAGE_H * 0.56, 145, stroke=1, fill=0)
    c.setFillColor(LIME)
    c.circle(PAGE_W - 67, PAGE_H * 0.56, 25, stroke=0, fill=1)

    wordmark(c, 18 * mm, PAGE_H - 30 * mm, inverse=True)
    c.setFillColor(colors.HexColor("#C7D6F3"))
    c.setFont("Helvetica-Bold", 7.2)
    c.drawString(18 * mm, PAGE_H - 72 * mm, "STRATEGY / DIGITAL PRODUCTS / MOBILITY")
    title(c, "Built for the", 18 * mm, PAGE_H - 99 * mm, 54, WHITE)
    c.setFillColor(LIME)
    c.setFont("Times-Italic", 57)
    c.drawString(36 * mm, PAGE_H - 119 * mm, "roads ahead.")

    draw_paragraph(
        c,
        "Ideas, products, and partnerships built to move people and businesses forward.",
        18 * mm,
        PAGE_H - 143 * mm,
        92 * mm,
        pstyle("cover-copy", fontSize=12.5, leading=18.5, textColor=colors.HexColor("#D8E2F5")),
    )

    c.setFillColor(colors.Color(1, 1, 1, alpha=0.09))
    c.roundRect(18 * mm, 29 * mm, 174 * mm, 24 * mm, 8, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(25 * mm, 43 * mm, "COMPANY PROFILE")
    c.setFillColor(colors.HexColor("#AFC0DF"))
    c.setFont("Helvetica", 7.2)
    c.drawString(25 * mm, 35 * mm, "PREVIEW EDITION / OCTOBER 2026")
    footer(c, 1, inverse=True)


def page_two(c):
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    wordmark(c, 18 * mm, PAGE_H - 27 * mm)
    label(c, "Our story", 18 * mm, PAGE_H - 54 * mm)
    title(c, "Progress, made practical.", 18 * mm, PAGE_H - 75 * mm, 39, INK, 128 * mm)

    draw_paragraph(
        c,
        "Prosperis exists to turn ambitious ideas into useful systems: businesses people trust, products they understand, and services that hold up in the real world.",
        18 * mm,
        PAGE_H - 112 * mm,
        82 * mm,
        pstyle("lead", fontName="Times-Roman", fontSize=16, leading=23, textColor=INK),
    )
    draw_paragraph(
        c,
        "We bring commercial thinking, technology, and operations to the same table - because meaningful progress rarely fits into one neat discipline.",
        18 * mm,
        PAGE_H - 157 * mm,
        82 * mm,
        BODY,
    )

    c.setFillColor(DEEP_BLUE)
    c.roundRect(116 * mm, 60 * mm, 76 * mm, 153 * mm, 12, fill=1, stroke=0)
    c.setStrokeColor(colors.Color(1, 1, 1, alpha=0.12))
    for radius in (26, 44, 62):
        c.circle(153 * mm, 165 * mm, radius * mm, stroke=1, fill=0)
    c.setFillColor(LIME)
    c.circle(153 * mm, 165 * mm, 10 * mm, stroke=0, fill=1)
    c.setFillColor(WHITE)
    c.setFont("Times-Roman", 24)
    c.drawString(128 * mm, 90 * mm, "See the whole")
    c.drawString(128 * mm, 80 * mm, "system.")
    c.setFillColor(colors.HexColor("#B8C8E6"))
    c.setFont("Helvetica", 7.5)
    c.drawString(128 * mm, 69 * mm, "COMMERCIAL / HUMAN / OPERATIONAL")
    footer(c, 2)


def page_three(c):
    c.setFillColor(WHITE)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    label(c, "What we do", 18 * mm, PAGE_H - 29 * mm)
    title(c, "Three connected disciplines.", 18 * mm, PAGE_H - 50 * mm, 38, INK, 165 * mm)
    draw_paragraph(
        c,
        "From the boardroom to the interface to the frontline, we keep the original purpose intact at every step.",
        18 * mm,
        PAGE_H - 81 * mm,
        150 * mm,
        pstyle("services-lead", fontSize=11, leading=17, textColor=SLATE),
    )

    cards = [
        ("01", "Strategy & growth", "Research / Positioning / Go-to-market", "Clear direction for organizations navigating new markets, operating models, and moments of change."),
        ("02", "Digital products", "Product design / Engineering / Experience", "Useful, human digital experiences shaped from first idea through launch and continuous improvement."),
        ("03", "Mobility services", "Operations / Driver networks / Fleet support", "Practical systems and partnerships that help people, teams, and goods move with more confidence."),
    ]
    x_positions = [18 * mm, 78 * mm, 138 * mm]
    for i, (number, heading, tags, copy) in enumerate(cards):
        x = x_positions[i]
        c.setFillColor(PAPER if i != 1 else DEEP_BLUE)
        c.roundRect(x, 65 * mm, 54 * mm, 122 * mm, 8, fill=1, stroke=0)
        c.setFillColor(BLUE if i != 1 else LIME)
        c.setFont("Helvetica-Bold", 7)
        c.drawString(x + 7 * mm, 174 * mm, number)
        c.setFillColor(INK if i != 1 else WHITE)
        c.setFont("Times-Roman", 17)
        c.drawString(x + 7 * mm, 149 * mm, heading.split(" ")[0])
        c.drawString(x + 7 * mm, 140 * mm, " ".join(heading.split(" ")[1:]))
        style = BODY if i != 1 else BODY_LIGHT
        draw_paragraph(c, copy, x + 7 * mm, 126 * mm, 40 * mm, style)
        c.setFillColor(SLATE if i != 1 else colors.HexColor("#B8C8E6"))
        c.setFont("Helvetica", 5.8)
        tag_lines = tags.split(" / ")
        for j, tag in enumerate(tag_lines):
            c.drawString(x + 7 * mm, (84 - j * 6) * mm, tag.upper())
    footer(c, 3)


def page_four(c):
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    label(c, "Featured product", 18 * mm, PAGE_H - 29 * mm, LIME)
    title(c, "Haya Drivers", 18 * mm, PAGE_H - 52 * mm, 45, WHITE)
    draw_paragraph(
        c,
        "A dedicated home for the mobility side of the Prosperis ecosystem. The final product description, capabilities, and relationship language should be confirmed before launch.",
        18 * mm,
        PAGE_H - 80 * mm,
        83 * mm,
        BODY_LIGHT,
    )
    c.setFillColor(LIME)
    c.roundRect(18 * mm, 154 * mm, 62 * mm, 13 * mm, 5, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawCentredString(49 * mm, 158.5 * mm, "HAYADRIVERS.COM")

    c.setFillColor(BLUE)
    c.roundRect(109 * mm, 50 * mm, 83 * mm, 178 * mm, 14, fill=1, stroke=0)
    c.setStrokeColor(colors.Color(1, 1, 1, alpha=0.18))
    c.circle(150 * mm, 145 * mm, 53 * mm, stroke=1, fill=0)
    c.setFillColor(colors.HexColor("#F8F9FB"))
    c.roundRect(128 * mm, 70 * mm, 45 * mm, 128 * mm, 10, fill=1, stroke=0)
    c.setFillColor(DEEP_BLUE)
    c.roundRect(130 * mm, 72 * mm, 41 * mm, 124 * mm, 8, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#E7EDF6"))
    c.roundRect(132 * mm, 74 * mm, 37 * mm, 120 * mm, 6, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.roundRect(132 * mm, 74 * mm, 37 * mm, 41 * mm, 6, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 6.5)
    c.drawString(136 * mm, 103 * mm, "Where are you going?")
    c.setFillColor(DEEP_BLUE)
    c.roundRect(136 * mm, 81 * mm, 29 * mm, 10 * mm, 3, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 5.5)
    c.drawCentredString(150.5 * mm, 84.3 * mm, "CONTINUE")
    c.setFillColor(LIME)
    c.circle(145 * mm, 154 * mm, 5 * mm, stroke=0, fill=1)
    c.setFillColor(DEEP_BLUE)
    c.circle(160 * mm, 174 * mm, 5 * mm, stroke=0, fill=1)
    c.setStrokeColor(BLUE)
    c.setDash(2, 2)
    c.line(145 * mm, 154 * mm, 160 * mm, 174 * mm)
    c.setDash()

    c.setFillColor(WHITE)
    c.setFont("Times-Roman", 19)
    c.drawString(18 * mm, 103 * mm, "Movement should feel")
    c.setFillColor(LIME)
    c.setFont("Times-Italic", 21)
    c.drawString(18 * mm, 92 * mm, "clear, human, dependable.")
    footer(c, 4, inverse=True)


def page_five(c):
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    label(c, "How we work", 18 * mm, PAGE_H - 29 * mm)
    title(c, "From question to momentum.", 18 * mm, PAGE_H - 51 * mm, 39, INK, 165 * mm)

    steps = [
        ("01", "Frame", "Find the real problem, define the people it affects, and agree what good looks like."),
        ("02", "Shape", "Turn insight into an intentional proposition, experience, and operating model."),
        ("03", "Build", "Make the idea tangible, test the important assumptions, and prepare for launch."),
        ("04", "Grow", "Learn from the real world, strengthen the system, and scale what is working."),
    ]
    y = 198 * mm
    for number, heading, copy in steps:
        c.setFillColor(DEEP_BLUE)
        c.circle(27 * mm, y + 4 * mm, 7 * mm, stroke=0, fill=1)
        c.setFillColor(LIME)
        c.setFont("Helvetica-Bold", 6.4)
        c.drawCentredString(27 * mm, y + 2 * mm, number)
        c.setFillColor(INK)
        c.setFont("Times-Roman", 22)
        c.drawString(43 * mm, y + 1 * mm, heading)
        draw_paragraph(c, copy, 82 * mm, y + 6 * mm, 100 * mm, BODY)
        c.setStrokeColor(colors.HexColor("#D7D5CE"))
        c.line(18 * mm, y - 13 * mm, 192 * mm, y - 13 * mm)
        y -= 42 * mm

    c.setFillColor(BLUE)
    c.roundRect(18 * mm, 27 * mm, 174 * mm, 26 * mm, 8, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Times-Roman", 15)
    c.drawString(25 * mm, 38 * mm, "Useful at launch. Better after learning.")
    c.setFillColor(LIME)
    c.circle(179 * mm, 40 * mm, 4 * mm, stroke=0, fill=1)
    footer(c, 5)


def page_six(c):
    c.setFillColor(DEEP_BLUE)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    wordmark(c, 18 * mm, PAGE_H - 27 * mm, inverse=True)
    label(c, "Start a conversation", 18 * mm, PAGE_H - 62 * mm, LIME)
    title(c, "What should we build next?", 18 * mm, PAGE_H - 86 * mm, 48, WHITE, 150 * mm)
    draw_paragraph(
        c,
        "Tell us what you are working toward. We will bring the questions, perspective, and practical next steps.",
        18 * mm,
        PAGE_H - 127 * mm,
        103 * mm,
        pstyle("closing", fontSize=12, leading=18, textColor=colors.HexColor("#D8E2F5")),
    )

    c.setFillColor(colors.Color(1, 1, 1, alpha=0.08))
    c.roundRect(18 * mm, 55 * mm, 174 * mm, 77 * mm, 12, fill=1, stroke=0)
    details = [
        ("EMAIL", "hello@prosperis.example"),
        ("PHONE", "+234 800 000 0000"),
        ("WEB", "prosperis.example"),
        ("LOCATION", "Lagos, Nigeria"),
    ]
    positions = [(27, 108), (109, 108), (27, 76), (109, 76)]
    for (heading, value), (x, y) in zip(details, positions):
        c.setFillColor(LIME)
        c.setFont("Helvetica-Bold", 6.2)
        c.drawString(x * mm, y * mm, heading)
        c.setFillColor(WHITE)
        c.setFont("Helvetica", 9)
        c.drawString(x * mm, (y - 7) * mm, value)

    c.setFillColor(colors.HexColor("#AFC0DF"))
    c.setFont("Helvetica", 6.4)
    c.drawString(18 * mm, 32 * mm, "PLACEHOLDER COMPANY DETAILS - REPLACE BEFORE PUBLIC LAUNCH")
    footer(c, 6, inverse=True)


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=A4, pageCompression=1)
    c.setTitle("Prosperis Group - Company Profile")
    c.setAuthor("Prosperis Group")
    c.setSubject("Company profile preview")
    for page in (page_one, page_two, page_three, page_four, page_five, page_six):
        page(c)
        c.showPage()
    c.save()


if __name__ == "__main__":
    build()
