"""
Generador de video Instagram 15s — Boreal Marketing
Formato: 1080x1920 (9:16) Stories/Reels
"""

import numpy as np
from PIL import Image, ImageDraw, ImageFont
from moviepy.video.VideoClip import VideoClip
import os

# --- CONFIG ---
W, H = 1080, 1920
FPS = 30
DURATION = 15.0

BRAND_DIR = "/Users/bertuja/claude-agents/boreal/assets/brand/"
FONT_DIR = BRAND_DIR + "fonts/"
OUTPUT = "/Users/bertuja/claude-agents/boreal/assets/boreal_video_instagram.mp4"

# Colors (R, G, B)
VIOLET  = (51,  0,   204)
WHITE   = (255, 255, 255)
PINK    = (254, 103, 180)
CYAN    = (18,  189, 255)
BLACK   = (0,   0,   0)

# Fonts
def load_font(variant, size):
    try:
        return ImageFont.truetype(FONT_DIR + variant, size)
    except:
        return ImageFont.load_default()

# Pre-load logo (celeste sobre transparente → sobre fondo violeta queda perfecto)
LOGO_IMG = Image.open(BRAND_DIR + "boreal_logo_celeste.png").convert("RGBA")


def ease_out(t):
    return 1 - (1 - t) ** 3

def ease_in_out(t):
    return t * t * (3 - 2 * t)

def clamp(v, lo=0.0, hi=1.0):
    return max(lo, min(hi, v))

def progress(t, start, end):
    if end <= start:
        return 1.0
    return clamp((t - start) / (end - start))


# ─── SECCION 1: Background + formas geométricas (0–3s) ───────────────────────
def draw_background(draw, t):
    """Fondo violeta sólido."""
    draw.rectangle([0, 0, W, H], fill=VIOLET)

def draw_shapes(draw, t):
    """Paralelepípedos decorativos deslizando desde abajo-derecha."""
    # Forma 1 — CYAN grande, esquina inferior derecha
    p1 = ease_out(clamp(t / 1.2))
    offset = int((1 - p1) * 600)
    pts = [
        (W - 80 + offset,  H - 400 + offset),
        (W + 200 + offset, H - 700 + offset),
        (W + 200 + offset, H + 50  + offset),
        (W - 80 + offset,  H + 50  + offset),
    ]
    draw.polygon(pts, fill=(*CYAN, 60))

    # Forma 2 — PINK pequeña, esquina superior izquierda
    p2 = ease_out(clamp((t - 0.3) / 1.0))
    off2 = int((1 - p2) * 400)
    pts2 = [
        (-200 - off2, -off2),
        (300  - off2, -off2),
        (200  - off2, 350 - off2),
        (-200 - off2, 350 - off2),
    ]
    draw.polygon(pts2, fill=(*PINK, 50))

    # Forma 3 — línea diagonal CYAN, centro-derecha
    p3 = ease_out(clamp((t - 0.6) / 0.8))
    off3 = int((1 - p3) * 300)
    pts3 = [
        (750 + off3, 400),
        (W   + off3, 300),
        (W   + off3, 580),
        (750 + off3, 680),
    ]
    draw.polygon(pts3, fill=(*CYAN, 40))


# ─── SECCION 2: Logo aparece (2s–5s) ─────────────────────────────────────────
def draw_logo(frame, t):
    """Logo con fade-in + leve scale-up."""
    p = ease_out(progress(t, 2.0, 4.5))
    if p <= 0:
        return

    # Scale: va de 0.8 a 1.0
    scale = 0.8 + 0.2 * p
    alpha = int(255 * p)

    # El logo original es 1920×1080 → crop zona útil y reescalar
    logo = LOGO_IMG.copy()
    # Recortar zona del logo (la imagen tiene mucho espacio en blanco)
    # Autodetect bounds
    bbox = logo.getbbox()
    if bbox:
        logo = logo.crop(bbox)

    # Target width: 680px
    tw = int(680 * scale)
    th = int(logo.height * tw / logo.width)
    logo = logo.resize((tw, th), Image.LANCZOS)

    # Aplicar alpha
    r, g, b, a = logo.split()
    a = a.point(lambda px: int(px * alpha / 255))
    logo = Image.merge("RGBA", (r, g, b, a))

    # Centrar horizontalmente, posicionar en zona media-alta
    x = (W - tw) // 2
    y = int(H * 0.32) - th // 2
    frame.paste(logo, (x, y), logo)


# ─── SECCION 3: Tagline (4.5s–8s) ────────────────────────────────────────────
def draw_tagline(draw, t):
    """'Tu Norte, seguinos' en PINK con efecto reveal."""
    p = ease_out(progress(t, 4.5, 6.5))
    if p <= 0:
        return

    font = load_font("Montserrat-Black.ttf", 88)
    text = "Tu Norte,"
    sub  = "seguinos."

    alpha = int(255 * p)
    # Clip de izquierda a derecha (reveal)
    # Simulamos con alpha
    color1 = (*PINK, alpha)
    color2 = (*WHITE, alpha)

    y_base = int(H * 0.62)
    draw.text((W // 2, y_base),      text, font=font, fill=color1, anchor="mm")
    draw.text((W // 2, y_base + 105), sub, font=font, fill=color2, anchor="mm")


# ─── SECCION 4: Subtexto (7s–11s) ────────────────────────────────────────────
def draw_subtext(draw, t):
    """Mensaje secundario de marca."""
    p = ease_in_out(progress(t, 7.0, 9.0))
    if p <= 0:
        return

    font = load_font("Montserrat-Bold.ttf", 46)
    font_italic = load_font("Montserrat-SemiBoldItalic.ttf", 38)

    alpha = int(255 * p)
    # Offset vertical sutil (slide-up)
    offset_y = int((1 - p) * 40)

    y = int(H * 0.77) + offset_y
    lines = [
        ("Marketing que activa tu marca", font, (*CYAN, alpha)),
        ("y mueve tu negocio.", font_italic, (*WHITE, alpha)),
    ]
    for i, (line, f, color) in enumerate(lines):
        draw.text((W // 2, y + i * 60), line, font=f, fill=color, anchor="mm")


# ─── SECCION 5: CTA final (11s–15s) ──────────────────────────────────────────
def draw_cta(draw, t):
    """CTA con datos de contacto."""
    p = ease_out(progress(t, 11.0, 13.0))
    if p <= 0:
        return

    alpha = int(255 * p)

    font_bold  = load_font("Montserrat-Bold.ttf", 44)
    font_reg   = load_font("Montserrat-Regular.ttf", 34)

    y_cta = int(H * 0.88)

    # Línea separadora
    line_w = int(280 * p)
    x0 = W // 2 - line_w // 2
    draw.rectangle([x0, y_cta - 28, x0 + line_w, y_cta - 24], fill=(*PINK, alpha))

    draw.text((W // 2, y_cta),      "boreal.com.ar",     font=font_bold, fill=(*WHITE, alpha), anchor="mm")
    draw.text((W // 2, y_cta + 55), "+54 9 11 3104-0042", font=font_reg,  fill=(*CYAN, alpha),  anchor="mm")

    # Pequeño pulso en el CTA al final
    if t > 13.5:
        p2 = ease_out(progress(t, 13.5, 14.5))
        box_w = int(340 * p2)
        box_h = 58
        bx = W // 2 - box_w // 2
        by = y_cta + 110
        draw.rounded_rectangle([bx, by, bx + box_w, by + box_h],
                                radius=29, fill=(*PINK, int(255 * p2)))
        if p2 > 0.5:
            draw.text((W // 2, by + box_h // 2), "Empecemos →",
                      font=load_font("Montserrat-Bold.ttf", 36),
                      fill=(*WHITE, 255), anchor="mm")


# ─── FADE IN/OUT global ───────────────────────────────────────────────────────
def global_alpha(t):
    fade_in  = clamp(t / 0.5)
    fade_out = clamp((DURATION - t) / 0.6)
    return min(fade_in, fade_out)


# ─── MAKE FRAME ──────────────────────────────────────────────────────────────
def make_frame(t):
    frame = Image.new("RGBA", (W, H), (*VIOLET, 255))
    draw  = ImageDraw.Draw(frame, "RGBA")

    draw_background(draw, t)
    draw_shapes(draw, t)
    draw_logo(frame, t)
    draw_tagline(draw, t)
    draw_subtext(draw, t)
    draw_cta(draw, t)

    # Fade global
    ga = global_alpha(t)
    if ga < 1.0:
        black_overlay = Image.new("RGBA", (W, H), (0, 0, 0, int((1 - ga) * 255)))
        frame = Image.alpha_composite(frame, black_overlay)

    return np.array(frame.convert("RGB"))


# ─── MAIN ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("⚙️  Generando video Boreal Instagram 15s...")
    clip = VideoClip(make_frame, duration=DURATION)
    clip.write_videofile(
        OUTPUT,
        fps=FPS,
        codec="libx264",
        audio=False,
        preset="fast",
        ffmpeg_params=["-crf", "18", "-pix_fmt", "yuv420p"],
        logger="bar",
    )
    print(f"\n✅ Video generado: {OUTPUT}")
    print(f"   Formato: {W}x{H} | {FPS}fps | {DURATION}s | Instagram Reels/Stories")
