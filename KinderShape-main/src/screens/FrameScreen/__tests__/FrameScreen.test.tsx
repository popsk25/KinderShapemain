import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { FrameScreen } from '../FrameScreen'

describe('FrameScreen', () => {
  it('renders the main page content', () => {
    render(
      <BrowserRouter>
        <FrameScreen />
      </BrowserRouter>
    )

    // Check for main headings
    expect(screen.getByText('Почему учителя и ученики выбирают нашу платформу')).toBeInTheDocument()
    expect(screen.getByText('Присоединяйся к нашим учителям')).toBeInTheDocument()

    // Check for benefit cards
    expect(screen.getByText('Креативность')).toBeInTheDocument()
    expect(screen.getByText('Универсальность')).toBeInTheDocument()
    expect(screen.getByText('Обучение')).toBeInTheDocument()
    expect(screen.getByText('Вовлечение')).toBeInTheDocument()
  })
}) 